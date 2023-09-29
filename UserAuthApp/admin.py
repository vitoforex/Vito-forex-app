from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'current_plan')
    list_filter = ('current_plan',)  


    # exclude = ('date_joined',)  


admin.site.register(models.CustomUser, CustomUserAdmin)


