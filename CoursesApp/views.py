from django.shortcuts import render
from .models import Course
from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict

def courses_list(request):
    courses = Course.objects.all()
    courses_list_dict = [{'title':course.title, 'description':course.description, 'image':course.image_url(), 'id':course.pk} for course in courses]
    return JsonResponse({'courses':courses_list_dict}, safe=False)

def course_detail(request, pk):
    course = Course.objects.get(id=pk)
    return JsonResponse({'title':course.title, 'description':course.description, 'image':course.image_url()}, safe=False)
