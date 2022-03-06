from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    avatar = models.ImageField(upload_to='user_avatar', null=True, blank=True)
    followers = models.IntegerField(default=0)
    followings = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    birthday = models.DateTimeField(null=True, blank=True)
    phone_number = models.CharField(max_length=11, null=True, blank=True)
