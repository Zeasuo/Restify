from itertools import chain

from rest_framework import filters
from rest_framework.generics import ListAPIView

# https://www.django-rest-framework.org/api-guide/filtering/
from restaurants.models import Restaurant, Food
from restaurants.serializers.searchRestaurant import SearchRestaurantSerializer


class SearchRestaurantView(ListAPIView):
    # https://yeti.co/blog/global-search-in-django-rest-framework/
    # https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter
    # https://www.codeproject.com/Questions/5308354/Django-searchfilter-for-multiple-models
    # https://medium.com/swlh/searching-in-django-rest-framework-45aad62e7782
    # https://stackoverflow.com/questions/45589644/django-order-by-desc
    queryset = Restaurant.objects.all()
    serializer_class = SearchRestaurantSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter,)
    search_fields = ['restaurant_name', 'address']
    ordering = ['-follower_num']
