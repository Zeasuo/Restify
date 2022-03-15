from django.urls import path

from socials.views.addBlog import AddBlog
from socials.views.followRestaurant import FollowRestaurantView
from socials.views.getBlog import GetBlogView

app_name = 'socials'

urlpatterns = [
    path('follow/<str:restaurant_name>/', FollowRestaurantView.as_view(), name='create_restaurant'),
    path('get_blog/<str:restaurant_name>/', GetBlogView.as_view(), name='get_blog'),
    path('add_blog/', AddBlog.as_view(), name='add_blog'),
]
