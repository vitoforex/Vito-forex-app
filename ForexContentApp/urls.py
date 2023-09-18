from django.urls import path
from .views import signals

urlpatterns = [
    path('signals', signals, name='signals'),
]