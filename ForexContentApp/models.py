from django.db import models
from ckeditor.fields import RichTextField

class Signal(models.Model):
    buy = models.CharField(max_length=30, blank=True, null=True)
    sell = models.CharField(max_length=30)
    sl = models.CharField(max_length=30)
    tp = models.CharField(max_length=30)
    risk_disclosure = RichTextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.sell
    

class DailyStep(models.Model):
    title = models.CharField(max_length=300)
    content = RichTextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class TradeBreakdown(models.Model):
    title = models.CharField(max_length=300)
    content = RichTextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title