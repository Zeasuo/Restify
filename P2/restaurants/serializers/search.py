from rest_framework import serializers

from restaurants.models import Restaurant


class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'restaurant_name', 'address', 'postal_code']
