import json
from django.shortcuts import render, HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def send_contact_form_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        message = data.get("message")
        email = data.get("email")
        name = data.get("subject")
        print(message)
        print(email)
        print(name)
        print(settings.EMAIL_HOST_USER,)
        send_mail(
            "Message from Vito forex contact form",
            message,
            settings.EMAIL_HOST_USER,
            ["joshuabiyinzika22@gmail.com"],
            fail_silently=False
        )

