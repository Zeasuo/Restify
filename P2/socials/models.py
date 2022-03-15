from django.db import models

from accounts.models import User
from restaurants.models import Restaurant


class Blog(models.Model):
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='blogs')
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BlogImage(models.Model):
    blog = models.ForeignKey(to=Blog, on_delete=models.CASCADE, related_name='avatar')
    image = models.ImageField(upload_to='blog_image', blank=True, null=True)


class RestaurantLike(models.Model):
    user = models.ForeignKey('accounts.User', related_name='liked_restaurants', on_delete=models.CASCADE)
    restaurant = models.ForeignKey('restaurants.Restaurant', related_name='restaurant_likes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class BlogLike(models.Model):
    user = models.ForeignKey('accounts.User', related_name='liked_blogs', on_delete=models.CASCADE)
    blog = models.ForeignKey('socials.Blog', related_name='blog_likes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Follow(models.Model):
    user = models.ForeignKey('accounts.User', related_name='followings', on_delete=models.CASCADE)
    restaurant = models.ForeignKey('restaurants.Restaurant', related_name='followers', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    user = models.ForeignKey('accounts.User', related_name='comments', on_delete=models.CASCADE)
    restaurant = models.ForeignKey('restaurants.Restaurant', related_name='comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=255)


class Notification(models.Model):
    user = models.ForeignKey(to=User, related_name='notification', on_delete=models.CASCADE)
    # https://stackoverflow.com/questions/48040008/django-restrict-data-that-can-be-given-to-model-field
    action = models.CharField(
        max_length=10,
        choices=(
            ("like", "Liked"),
            ("follow", "Followed"),
            ("comment", "Commented")
        )
    )
    TargetUser = models.ForeignKey(to=User, related_name='getNotification', on_delete=models.CASCADE)
    TargetItem = models.CharField(
        max_length=10,
        choices=(
            ("restaurant", "Restaurant"),
            ("blog", "Blog"),
            ("comment", "Comment")
        )
    )
