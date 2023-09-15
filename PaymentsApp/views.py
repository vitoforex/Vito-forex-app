from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django_nextjs.render import render_nextjs_page_async
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import UserPayments
from django_nextjs.render import render_nextjs_page_sync
from django.contrib.auth.decorators import login_required

import time
import stripe
import json


@csrf_exempt
def create_checkout_session(request):
    stripe.api_key = 'sk_test_51NnLJiCOWoAHqo4JynKkzgl7VtwPjzbkKPnBREjlXZ2W0PFynxa5oz3eRWxE7bxggafuwMva3XuusoNE4JiiqZn00072uwh35o'

    if request.method == 'POST':
        data = json.loads(request.body)
        checkout_session = stripe.checkout.Session.create(
            payment_method_types = ['card'],
            line_items = [
                {
                    'price': data['price'],
                    'quantity':1,
                }
            ],
            mode='payment',
            customer_creation='always',
            success_url="http://localhost:8000/payment/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url="http://localhost:8000/payment/cancel",
        )

        print(checkout_session)

        # return redirect(checkout_session.url, status=303)
        return JsonResponse({'url': checkout_session.url})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    



@csrf_exempt
def payment_successful(request):
    # stripe.api_key = settings.STRIPE_SECRET_KEY_TEST
    stripe.api_key = 'sk_test_51NnLJiCOWoAHqo4JynKkzgl7VtwPjzbkKPnBREjlXZ2W0PFynxa5oz3eRWxE7bxggafuwMva3XuusoNE4JiiqZn00072uwh35o'
    checkout_session_id = request.GET.get('session_id', None)
    #checkout_session_id = stripe.checkout.Session.retrieve("cs_test_a1fCHBvJrCi8XNj8kD4so5mXTZofL0gorktZVuMK4bSiGgAX7D8FmGthnP")
    
    if not checkout_session_id:
        # Handle the case when 'session_id' is missing or invalid
        return JsonResponse({'error': 'Invalid session_id', 'id':checkout_session_id}, status=400)

    try:
        session = stripe.checkout.Session.retrieve(checkout_session_id)
        customer = stripe.Customer.retrieve(session.customer)
        
        # Assuming you have a UserPayments model and want to associate it with the session
        """
        user_id = request.user.id
        print(f'user id: {request.user.id}')
        user_payment = UserPayments.objects.get(user=user_id)
        user_payment.stripe_checkout_id = checkout_session_id
        user_payment.save()
        """
        
        return render(request, 'payments/success.html') # Render your success template
    except RuntimeError as e:
        # Handle the Stripe API error gracefully
        return JsonResponse({'error': str(e)}, status=400)
    """
    except UserPayments.DoesNotExist:
        # Handle the case when the user payment record doesn't exist
        UserPayments.objects.create(user=request.user, payment_bool=True, stripe_checkout_id=checkout_session_id)
        return JsonResponse({'status':'Successful'}) # Render your success template
    """

def payment_canceled(request):
    # user is redirected to a page that notifies them that their payment did not go through..
    return render_nextjs_page_async(request)

@csrf_exempt
def stripe_webhook(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY_TEST
    time.sleep(10)
    payload = request.body
    signature_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None 
    try:
        event = stripe.Webhook.construct_event(
            payload,signature_header, settings.STRIPE_WEBHOOK_SECRET_TEST
        )
    except ValueError as e:
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        return HttpResponse(status=400)
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        session_id = session.get('id', None)
        time.sleep(15)
        user_payment = UserPayments.objects.get(stripe_checkout_id=session_id)
        line_items = stripe.checkout.Session.list_line_items(session_id, limit=1)
        user_payment.payment_bool = True
        user_payment.save()
    return HttpResponse(status=200)
 


