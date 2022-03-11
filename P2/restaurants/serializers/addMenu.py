from rest_framework import serializers
from rest_framework.exceptions import APIException

from restaurants.models import Food, Restaurant


class AddMenuSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source='restaurant.get_name', read_only=True)
    class Meta:
        model = Food
        fields = ['food_name', 'price', 'description', 'restaurant']

    def create(self, validated_data):
        try:
            x = Restaurant.objects.get(owner=self.context['request'].user)
        except Restaurant.DoesNotExist:
            raise APIException("You don't have a restaurant yet")
        return super().create({**validated_data, **{'restaurant': x}})
