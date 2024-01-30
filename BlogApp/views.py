from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import BlogPost
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator



def post_list(request):
    page_number = int(request.GET.get('page', 1))
    posts_per_page = 5
    posts = BlogPost.objects.order_by("-pub_date")
    paginator = Paginator(posts, posts_per_page)
    page_posts = paginator.get_page(page_number)
    posts_list = [
        {
            "title": post.title,
            "content": post.content,
            "author": post.author.name,
            "author_image": post.author.author_image_url(),
            "pub_date": post.pub_date,
            "updated_date": post.updated_date,
            "featured_image": post.featured_image_url(),
            "id": post.pk,
        }
        for post in page_posts
    ]

    return JsonResponse({'posts': posts_list, 'total_pages': paginator.num_pages}, safe=False)


def post_list_page(request):
    pass


def post_detail(request, pk):
    post = get_object_or_404(BlogPost, pk=pk)
    post_content = {
            "title": post.title,
            "content": post.content,
            "author": post.author.name,
            "role":post.author.role,
            "author_image": post.author.author_image_url(),
            "pub_date": post.pub_date,
            "updated_date": post.updated_date,
            "featured_image": post.featured_image_url(),
            "id": post.pk,
        }
    
    return JsonResponse({'post':post_content}, safe=False)
