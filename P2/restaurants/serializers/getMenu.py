from rest_framework import serializers

from restaurants.models import Food


class GetMenuSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source='restaurant.get_name',
                                       read_only=True)

    class Meta:
        model = Food
        fields = '__all__'
