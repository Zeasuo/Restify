from rest_framework import filters
from rest_framework.generics import ListAPIView

# https://www.django-rest-framework.org/api-guide/filtering/
from restaurants.models import Food
from restaurants.serializers.searchMenu import SearchMenuSerializer


class SearchMenuView(ListAPIView):
    # https://yeti.co/blog/global-search-in-django-rest-framework/
    # https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter
    # https://www.codeproject.com/Questions/5308354/Django-searchfilter-for-multiple-models
    # https://medium.com/swlh/searching-in-django-rest-framework-45aad62e7782
    # https://stackoverflow.com/questions/45589644/django-order-by-desc
    queryset = Food.objects.all()
    serializer_class = SearchMenuSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter,)
    search_fields = ['food_name']
    ordering = ['-follower_num']
