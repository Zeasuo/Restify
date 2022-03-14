from django.urls import path

from socials.views.followRestaurant import FollowRestaurantView

app_name = 'socials'

urlpatterns = [
    path('follow/<str:restaurant_name>/', FollowRestaurantView.as_view(), name='create_restaurant'),
]
