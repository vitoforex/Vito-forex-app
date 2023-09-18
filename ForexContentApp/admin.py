from django.contrib import admin
from .models import Signal, DailyStep, TradeBreakdown

admin.site.register(Signal)
admin.site.register(DailyStep)
admin.site.register(TradeBreakdown)
