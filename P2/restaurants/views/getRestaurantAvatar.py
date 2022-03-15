from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from restaurants.models import RestaurantImage, Restaurant
from restaurants.serializers.getRestaurantAvatar import GetRestaurantAvatarSerializer


class OnePagesPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'


class GetRestaurantAvatar(ListAPIView):
    model = RestaurantImage
    serializer_class = GetRestaurantAvatarSerializer
    queryset = Restaurant.objects
    pagination_class = OnePagesPagination

    def get(self, request, *args, **kwargs):
        avatar = RestaurantImage.objects.filter(restaurant=Restaurant.objects.get(restaurant_name=self.kwargs["restaurant_name"]))
        serializer = GetRestaurantAvatarSerializer(avatar, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)



