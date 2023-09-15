from django.db import models
from UserAuthApp.models import CustomUser
from django.dispatch import receiver
from django.db.models.signals import post_save

class UserPayments(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    payment_bool = models.BooleanField(default=False)
    stripe_checkout_id = models.CharField(max_length=500)

    def __str__(self):
        return str(self.user.username)

@receiver(post_save, sender=CustomUser)
def create_user_payment(sender, instance, created, **kwargs):
    if created:
        UserPayments.objects.create(user=instance)


