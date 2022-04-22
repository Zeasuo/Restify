from rest_framework import serializers

from restaurants.models import Food


class GetMenuSerializer(serializers.ModelSerializer):
    get_id = serializers.ReadOnlyField()

    class Meta:
        model = Food
        fields = ['food_name', 'price', 'description', 'category', 'get_id']
