from django.db import models
from UserAuthApp.models import CustomUser
from ckeditor.fields import RichTextField

class Author(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='author/',blank=True, null=True)
    role = models.CharField(max_length=100, blank=True, null=True)

    def author_image_url(self):
        return self.image.url
    
    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=500)
    content = RichTextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog/', blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    
    def featured_image_url(self):
        return self.image.url

class Comment(models.Model):
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=50)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    approved_comment = models.BooleanField(default=False)
    is_spam = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def mark_as_spam(self):
        self.is_spam = True
        self.save()

    def __str__(self):
        return f"Comment by {self.author} on {self.post.title}"
