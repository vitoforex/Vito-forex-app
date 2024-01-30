from django.shortcuts import render
from .models import Event
from django.http import JsonResponse


def events_list(request):
    events = Event.objects.order_by("-date")[:3]
    events_list = [
        {
            "title": event.title,
            "link": event.link,
            "venue": event.venue,
            "date": event.date,
            "event_image": event.event_image_url(),
        }
        for event in events
    ]
    return JsonResponse({'events':events_list}, safe=False)


