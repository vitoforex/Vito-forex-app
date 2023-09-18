from django.urls import path
from .views import signals, daily_setups, trade_breakdown

urlpatterns = [
    path('signals', signals, name='signals'),
    path('setup', daily_setups, name='daily-setups'),
    path('tradebreakdown', trade_breakdown, name='trade-breakdown'),
]