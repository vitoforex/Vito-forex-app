from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    CURRENT_PLAN_CHOICES = [
        ('basic', 'Basic'),
        ('standard', 'Standard'),
        ('premium', 'Premium'),
        ('no-plan', 'No Plan'),
    ]
    current_plan = models.CharField(max_length=10, choices=CURRENT_PLAN_CHOICES, default='no-plan')

    plan_start_date = models.DateTimeField(null=True, blank=True)
    plan_expiration_date = models.DateTimeField(null=True, blank=True)
    

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='custom_user_set',  
        related_query_name='custom_user',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='custom_user_set',  
        related_query_name='custom_user',
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return self.email
    
    def set_plan_expiration(self, plan):
        if plan == 'basic':
            self.plan_expiration_date = self.plan_start_date + timezone.timedelta(days=30)
        elif plan == 'standard':
            self.plan_expiration_date = self.plan_start_date + timezone.timedelta(days=90)
        elif plan == 'premium':
            self.plan_expiration_date = self.plan_start_date + timezone.timedelta(days=180)
        else:
            self.plan_expiration_date = None  # Handle 'no-plan'

        self.save()

