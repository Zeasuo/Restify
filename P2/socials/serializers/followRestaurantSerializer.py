from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from restaurants.models import Restaurant
from socials.models import Follow


class FollowRestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follow
        fields = ['user', 'restaurant', 'created_at']

