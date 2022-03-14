from rest_framework import serializers

from socials.models import Follow


class FollowRestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follow
        fields = '__all__'

    def create(self, validated_data):
        return super().create({**validated_data})
