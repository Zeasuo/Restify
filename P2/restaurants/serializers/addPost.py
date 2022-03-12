from rest_framework import serializers

from restaurants.models import Food, Post, Restaurant


class AddPostSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source='restaurant.get_name', read_only=True)

    class Meta:
        model = Post
        fields = ['title', 'context', '', 'restaurant']

    def create(self, validated_data):
        x = Restaurant.objects.get(owner=self.context['request'].user)
        return super().create({**validated_data, **{'restaurant': x}})

