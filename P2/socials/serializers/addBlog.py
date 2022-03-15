from rest_framework import serializers

from restaurants.models import Restaurant
from socials.models import Blog


class AddBlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ['title', 'content']

    def create(self, validated_data):
        x = Restaurant.objects.get(restaurant_name=self.context['request'].user.restaurant)
        return super().create({**validated_data, **{'restaurant': x}})
