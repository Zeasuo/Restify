from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from restaurants.models import Restaurant
from socials.models import Follow, RestaurantLike


class LikeRestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = RestaurantLike
        fields = '__all__'


