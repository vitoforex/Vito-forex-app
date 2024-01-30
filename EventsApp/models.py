from typing import Any
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=40)
    link = models.CharField(max_length=200)
    venue = models.CharField(max_length=30)
    event_image = models.ImageField(upload_to='events/',blank=True, null=True)
    date = models.DateField()

    def event_image_url(self):
        return self.event_image.url

    def __str__(self):
        return self.title
    

