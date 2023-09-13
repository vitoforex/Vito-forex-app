from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import BlogPost
from django.http import JsonResponse, HttpResponse



def post_list(request):
    posts = BlogPost.objects.order_by("-pub_date")
    posts_list = [
        {
            "title": post.title,
            "content": post.content,
            "author": post.author,
            "author_image": post.author_image_url(),
            "pub_date": post.pub_date,
            "updated_date": post.updated_date,
            "featured_image": post.featured_image_url(),
            "id": post.pk,
        }
        for post in posts
    ]
    return JsonResponse({'posts':posts_list}, safe=False)


def post_detail(request, pk):
    post = get_object_or_404(BlogPost, pk=pk)
    post_content = {
            "title": post.title,
            "content": post.content,
            "author": post.author,
            "author_image": post.author_image_url(),
            "pub_date": post.pub_date,
            "updated_date": post.updated_date,
            "featured_image": post.featured_image_url(),
            "id": post.pk,
        }
    
    return JsonResponse({'post':post_content}, safe=False)
