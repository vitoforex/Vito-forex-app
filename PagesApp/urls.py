from . import views
from django.urls import path



urlpatterns = [
    path("", views.index, name='home'),
    path("about",  views.about, name='about'),
    path("blog",  views.blog, name='blog'),
    path("blog/<int:pk>",  views.blog_detail, name='blog_detail'),
    path("signals",  views.signals, name='signals'),
    path("courses",  views.courses, name='courses'),
    path("courses/<int:pk>",  views.course_detail, name='course_detail'),
    path("contact",  views.contact, name='contact'),
    path("login",  views.login, name='login'),
    path("register",  views.register, name='register'),
    path("password_reset",  views.password_reset, name='password_reset'),
    path("mentorship", views.mentorship, name="mentorship")
]