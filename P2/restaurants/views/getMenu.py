from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from restaurants.models import Food, RestaurantImage, Restaurant
from restaurants.serializers.getMenu import GetMenuSerializer


class OnePagesPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'


class GetMenu(ListAPIView):
    model = Food
    serializer_class = GetMenuSerializer
    queryset = Food.objects
    pagination_class = OnePagesPagination

    def get(self, request, *args, **kwargs):
        avatar = Food.objects.filter(restaurant=Restaurant.objects.get(restaurant_name=self.kwargs["restaurant_name"]))
        serializer = GetMenuSerializer(avatar, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)