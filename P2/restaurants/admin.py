from django.contrib import admin

# Register your models here.
from restaurants.models import Restaurant, Blog, Food, RestaurantImage, BlogImage

admin.site.register(Restaurant)
admin.site.register(Blog)
admin.site.register(Food)
admin.site.register(RestaurantImage)
admin.site.register(BlogImage)



