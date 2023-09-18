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


def daily_setups(request):
    if request.method == 'GET':
        last_7_entries = DailyStep.objects.order_by('-date_created')[:7]
        serialized_setups = serializers.serialize('json', last_7_entries)
        return JsonResponse({"setups":serialized_setups})
    else:
        return JsonResponse({"error":"expected a get request"})

def trade_breakdown(request):
    if request.method == 'GET':
        last_7_entries = TradeBreakdown.objects.order_by('-date_created')[:7]
        serialized_setups = serializers.serialize('json', last_7_entries)
        return JsonResponse({"trade_breakdowns":serialized_setups})
    else:
        return JsonResponse({"error":"expected a get request"})
