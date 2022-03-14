from itertools import chain

from django.db.models import Count
from rest_framework import filters
from rest_framework.generics import ListAPIView

# https://www.django-rest-framework.org/api-guide/filtering/
from restaurants.models import Restaurant
from restaurants.serializers.searchRestaurant import SearchRestaurantSerializer


class SearchRestaurantView(ListAPIView):
    # https://yeti.co/blog/global-search-in-django-rest-framework/
    # https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter
    # https://www.codeproject.com/Questions/5308354/Django-searchfilter-for-multiple-models
    # https://medium.com/swlh/searching-in-django-rest-framework-45aad62e7782
    # https://stackoverflow.com/questions/45589644/django-order-by-desc
    queryset = Restaurant.objects.all().\
        annotate(follower_num=Count('followers')).order_by('-follower_num')
    serializer_class = SearchRestaurantSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter,)
    search_fields = ['restaurant_name', 'address']