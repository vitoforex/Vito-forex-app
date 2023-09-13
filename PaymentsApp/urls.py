from django.urls import path
from . import views

urlpatterns = [
    path('success', views.payment_successful, name='payment-successful'),
    path('cancelled', views.payment_canceled, name='payment-cancelled'),
    path('checkout', views.create_checkout_session, name='checkout'),
    path('webhook', views.stripe_webhook, name='webhook'),
]