from rest_framework import serializers

from restaurants.models import Food


class AddFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['food_name', 'price', 'description']

    def create(self, validated_data):
        return super().create({**validated_data, **{'restaurant': self.context['request'].user.restaurant}})
