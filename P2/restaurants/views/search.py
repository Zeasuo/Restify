from rest_framework import filters
from rest_framework.generics import ListAPIView


# https://www.django-rest-framework.org/api-guide/filtering/
from restaurants.models import Restaurant, Food
from restaurants.serializers.search import SearchSerializer


class SearchView(ListAPIView):
    # https://simpleisbetterthancomplex.com/tips/2016/06/20/django-tip-5-how-to-merge-querysets.html
    queryset = Restaurant.objects.all()
    serializer_class = SearchSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter,)
    search_fields = ['restaurant_name', 'address']
    ordering = ['-follower_num']


