from django.shortcuts import render
from .models import Signal, DailyStep, TradeBreakdown
from django.http import JsonResponse
from django.core import serializers

def signals(request):
    if request.method == 'GET':
        last_dozen_signals = Signal.objects.order_by('-date_created')[:12]
        serialized_signals = serializers.serialize('json', last_dozen_signals)
        return JsonResponse({"signals":serialized_signals})
    else:
        return JsonResponse({"error":"expected a get request"})