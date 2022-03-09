from django.urls import path

from restaurants.views.createRestaurant import CreateRestaurant
from restaurants.views.getRestaurant import GetRestaurant
from restaurants.views.updateRestaurant import UpdateRestaurant

app_name = 'restaurants'
urlpatterns = [
    path('create/', CreateRestaurant.as_view(), name = 'create_restaurant'),
    path('get/<str:restaurant_name>/', GetRestaurant.as_view(), name = 'get_restaurant'),
    path('update/', UpdateRestaurant.as_view(), name = 'update_restaurant')
]