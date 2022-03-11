from rest_framework import serializers
from rest_framework.exceptions import APIException

from restaurants.models import Food, Restaurant


class AddMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['food_name', 'price', 'description']

    def create(self, validated_data):
        try:
            x = Restaurant.objects.get(owner=self.context['request'].user)
        except Restaurant.DoesNotExist:
            raise APIException("You don't have a restaurant yet")
        return super().create({**validated_data, **{'restaurant': x}})
