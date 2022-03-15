from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from restaurants.models import Restaurant
from socials.models import BlogLike, Follow, RestaurantLike


class LikeBlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogLike
        fields = '__all__'


