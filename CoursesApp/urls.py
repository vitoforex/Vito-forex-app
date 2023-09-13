from . import views
from django.urls import path

urlpatterns = [
    path("", views.courses_list, name='courses-list'),
    path("course/<int:pk>",  views.course_detail, name='course-detail'),
]