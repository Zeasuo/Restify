from django.urls import path

from restaurants.views.createRestaurant import CreateRestaurant

app_name = 'restaurants'
urlpatterns = [
    path('create/', CreateRestaurant.as_view(), name = 'create_restaurant')
]