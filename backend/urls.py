"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from django.views.generic import TemplateView

routes = getattr(settings, 'REACT_ROUTES', [])

urlpatterns = [
    #path("", TemplateView.as_view(template_name='index.html')),
    url(r'^(%s)?$' % '|'.join(routes), TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path("auth/", include("UserAuthApp.urls")),
    path("payment/", include("PaymentsApp.urls")),
    path("courses_api/", include("CoursesApp.urls")),
    path("blog_api/", include("BlogApp.urls")),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
