from rest_framework import serializers

from restaurants.models import Restaurant


class CreateRestaurantSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.get_full.name', read_only=True)

    class Meta:
        model = Restaurant
        fields = ['restaurant_name', 'address', 'owner', 'description', 'postal_code']

    def create(self, validated_data):
        return super().create({**validated_data, **{'owner': self.context['request'].user}})
