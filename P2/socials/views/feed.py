from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from restaurants.models import Restaurant
from socials.models import Blog, Follow
from socials.serializers.feed import FeedSerializer
from socials.serializers.getBlog import GetBlogSerializer


class OnePagesPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'


class FeedView(ListAPIView):
    model = Blog
    serializer_class = FeedSerializer
    pagination_class = OnePagesPagination

    def get_queryset(self):
        follows = Follow.objects.filter(user=self.request.user)
        followed_restaurants = Restaurant.objects.none()
        for follow in follows:
            followed_restaurants |= Restaurant.objects.filter(pk=follow.restaurant.pk)
        followed_blogs = Blog.objects.none()
        for curr_restaurant in followed_restaurants:
            followed_blogs |= Blog.objects.filter(restaurant=curr_restaurant.pk)
        return followed_blogs.order_by('-created_at')



