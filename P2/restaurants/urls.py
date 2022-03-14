from django.urls import path

from restaurants.views.addRestaurantAvatar import AddRestaurantAvatar
from restaurants.views.createRestaurant import CreateRestaurant
from restaurants.views.editMenu import EditMenu
from restaurants.views.getMenu import GetMenu
from restaurants.views.getRestaurant import GetRestaurant
from restaurants.views.getRestaurantAvatar import GetRestaurantAvatar
from restaurants.views.searchMenu import SearchMenuView
from restaurants.views.searchRestaurant import SearchRestaurantView
from restaurants.views.updateRestaurant import UpdateRestaurant
from restaurants.views.addMenu import AddMenu

app_name = 'restaurants'
urlpatterns = [
    path('create/', CreateRestaurant.as_view(), name='create_restaurant'),
    path('get/<str:restaurant_name>/', GetRestaurant.as_view(), name='get_restaurant'),
    path('update/', UpdateRestaurant.as_view(), name='update_restaurant'),
    path('add_avatar/', AddRestaurantAvatar.as_view(), name='add_avatar'),
    path('<str:restaurant_name>/avatar/', GetRestaurantAvatar.as_view(), name='get_restaurant_avatar'),
    path('add_menu/', AddMenu.as_view(), name='add_menu'),
    path('get_menu/<str:restaurant_name>/', GetMenu.as_view(), name='get_menu'),
    path('edit_menu/<str:restaurant_name>/', EditMenu.as_view(), name='edit_menu'),
    path('searchrestaurant/', SearchRestaurantView.as_view(), name='searchrestaurant'),
    path('searchmenu/', SearchMenuView.as_view(), name='searchmenu')
]
