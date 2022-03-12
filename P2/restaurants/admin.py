from django.contrib import admin

# Register your models here.
from restaurants.models import Restaurant, Blog, Comment, Food, Liked, Followed, RestaurantImage

admin.site.register(Restaurant)
admin.site.register(Blog)
admin.site.register(Comment)
admin.site.register(Food)
admin.site.register(Liked)
admin.site.register(Followed)
admin.site.register(RestaurantImage)



