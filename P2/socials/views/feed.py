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
        for curr_restaurant in followed_restaurants:
            self.queryset |= Blog.objects.filter(restaurant=curr_restaurant.pk)
        return self.queryset.order_by('-created_at')

    def get(self, request, *args, **kwargs):
        avatar = Blog.objects.filter(restaurant=Restaurant.objects.get(restaurant_name=self.kwargs["restaurant_name"]))
        serializer = GetBlogSerializer(avatar, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)

