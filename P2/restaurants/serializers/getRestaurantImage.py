from rest_framework import serializers

from restaurants.models import RestaurantImage


class GetRestaurantImageSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source="restaurant.get_name", read_only=True)

    class Meta:
        model = RestaurantImage
        fields = ["restaurant", "image"]
