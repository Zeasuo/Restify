from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    avatar = models.ImageField(upload_to='user_avatar', null=True, blank=True)
    followers = models.IntegerField()
    followings = models.IntegerField()
    like = models.IntegerField()


