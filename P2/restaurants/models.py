from django.db import models
from accounts.models import User


class Restaurant(models.Model):
    owner = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='restaurant')
    restaurant_name = models.CharField(max_length=150, unique=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)
    postal_code = models.CharField(max_length=6, null=True, blank=True)
    logo = models.ImageField(upload_to='logo', null=True, blank=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.restaurant_name

    def get_name(self):
        return self.restaurant_name

    def get_logo(self):
        return self.logo

    @property
    def num_follower(self):
        return self.followers.all().count()

    @property
    def num_blog(self):
        return self.blogs.all().count()


class Food(models.Model):
    food_name = models.CharField(max_length=100)
    price = models.FloatField()
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='food')
    description = models.TextField(blank=True, null=True)
    category = models.CharField(
        max_length=10,
        choices=(
            ("Breakfast", "Breakfast"),
            ("Lunch", "Lunch"),
            ("Dinner", "Dinner")
        )
    )

    def __str__(self):
        return str(self.restaurant) + ': ' + str(self.food_name)

    class Meta:
        unique_together = ('food_name', 'restaurant')


class RestaurantImage(models.Model):
    image = models.ImageField(upload_to='restaurant_avatar')
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='avatar')
