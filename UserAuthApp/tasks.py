from django.db import models
from django.utils import timezone
from background_task import background
from .models import CustomUser

@background(schedule=timezone.timedelta(seconds=10))  # Run the task daily
def check_expired_plans():
    current_date = timezone.now()
    expired_users = CustomUser.objects.filter(plan_expiration_date__lt=current_date)
    
    for user in expired_users:
        user.current_plan = 'no-plan'
        user.save()

check_expired_plans()