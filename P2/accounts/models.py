from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(upload_to='user_avatar', null=True, blank=True)
    birthday = models.DateTimeField(null=True, blank=True)
    phone_number = models.CharField(max_length=11, null=True, blank=True)
    followers = models.IntegerField(default=0)
    followings = models.ManyToManyField("restaurants.Restaurant",
                                        related_name="followings", blank=True)
    likes = models.ManyToManyField("restaurants.Blog",
                                   related_name="liked_blogs", blank=True)
