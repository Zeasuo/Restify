from django.conf import settings
from django.db import models

# Create your models here.
from accounts.models import User


class Restaurant(models.Model):
    restaurant_name = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    owner = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='restaurant')
    description = models.TextField()
    postal_code = models.CharField(max_length=6, null=True, blank=True)

    def __str__(self):
        return self.restaurant_name


class Post(models.Model):
    post_image = models.ImageField(upload_to='post_image', blank=True, null=True)
    likes = models.IntegerField()
    comment_num = models.IntegerField()
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='post')


class Comment(models.Model):
    comment = models.TextField()
    post = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='comment')


class Food(models.Model):
    food_name = models.CharField(max_length=100)
    price = models.FloatField()
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='food')

    def __str__(self):
        return str(self.restaurant) + ': ' + str(self.food_name)


class RestaurantImage(models.Model):
    image = models.ImageField(upload_to='restaurant_avatar', blank=True, null=True)
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='avatar')


class Followed(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    restaurants = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE)


class Liked(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE)
