from django.urls import path
from . import views

urlpatterns = [
    path('register', views.register, name='auth-register'),
    path('login', views.login_user, name='auth-login'),
    path('logout', views.logout_user, name='auth-logout'),
    path('user_status', views.get_user_status, name='auth-user-status'),
]