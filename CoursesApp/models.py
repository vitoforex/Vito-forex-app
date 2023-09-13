from django.db import models
from ckeditor.fields import RichTextField

class Course(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='courses/')
    description = RichTextField()

    def __str__(self):
        return self.title
    
    def image_url(self):
        if self.image:
            return self.image.url
        return ''
    

