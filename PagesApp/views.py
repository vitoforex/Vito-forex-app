from django.shortcuts import render
from django_nextjs.render import render_nextjs_page_sync


def index(request):
    return render_nextjs_page_sync(request)

def about(request):
    return render_nextjs_page_sync(request)

def signals(request):
    return render_nextjs_page_sync(request)

def courses(request):
    return render_nextjs_page_sync(request)

def course_detail(request, pk):
    return render_nextjs_page_sync(request)

def contact(request):
    return render_nextjs_page_sync(request)

def login(request):
    return render_nextjs_page_sync(request)

def register(request):
    return render_nextjs_page_sync(request)

def password_reset(request):
    return render_nextjs_page_sync(request)


def blog(request):
    return render_nextjs_page_sync(request)

def mentorship(request):
    return render_nextjs_page_sync(request)

def blog_detail(request, pk):
    return render_nextjs_page_sync(request)