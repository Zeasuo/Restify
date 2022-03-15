from django.urls import path

from socials.views.addBlog import AddBlog
from socials.views.addComment import AddCommentView
from socials.views.followRestaurant import FollowRestaurantView, \
    UnFollowRestaurantView
from socials.views.getBlog import GetBlogView
from socials.views.likeBlog import LikeBlogView, UnLikeBlogView
from socials.views.likeRestaurant import LikeRestaurantView, \
    UnLikeRestaurantView

app_name = 'socials'

urlpatterns = [
    path('follow/<str:restaurant_name>/', FollowRestaurantView.as_view(), name='follow_restaurant'),
    path('unfollow/<str:restaurant_name>/', UnFollowRestaurantView.as_view(), name='unfollow_restaurant'),
    path('get_blog/<str:restaurant_name>/', GetBlogView.as_view(), name='get_blog'),
    path('add_blog/', AddBlog.as_view(), name='add_blog'),
    path('add_blog/', AddBlog.as_view(), name='add_blog'),
    path('like_restaurant/<str:restaurant_name>/', LikeRestaurantView.as_view(), name='like_restaurant'),
    path('unlike_restaurant/<str:restaurant_name>/', UnLikeRestaurantView.as_view(), name='unlike_restaurant'),
    path('like_blog/<int:blog_id>/', LikeBlogView.as_view(), name='like_blog'),
    path('unlike_blog/<int:blog_id>/', UnLikeBlogView.as_view(), name='unlike_blog'),
    path('comment/<str:restaurant_name>/', AddCommentView.as_view(), name='add_comment')
]
