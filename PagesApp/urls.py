from . import views
from django.urls import path



urlpatterns = [
    path("send_contact_form_email",  views.send_contact_form_email, name='send_contact_form_email'),
]