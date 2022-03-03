from django.conf import settings
from django.db import models

# Create your models here.
class Restaurant(models.Model):
    restaurant_name = models.CharField(max_length=150)
    address = models.CharField(max_length = 250)
    restaurant_avatar = models.ImageField(upload_to='restaurant_avatar', blank=True, null=True)
    owner = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='restaurant')
    description = models.TextField()

    def __str__(self):
        return self.restaurant_name
class Post(models.Model):
    post_image = models.ImageField(upload_to='post_image', blank=True, null = True)
    likes = models.IntegerField()
    comment_num = models.IntegerField()
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='post')

class Comment(models.Model):
    comment = models.TextField()
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='comment')

class Food(models.Model):
    food_name = models.CharField(max_length=100)
    price = models.FloatField()
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='food')

    def __str__(self):
        return str(self.restaurant) + ': ' + str(self.food_name)