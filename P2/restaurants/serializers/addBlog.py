from rest_framework import serializers

from restaurants.models import Blog, Restaurant


class AddPostSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source='restaurant.get_name', read_only=True)
    likes = serializers.IntegerField(default=0, read_only=True)
    comment_num = serializers.IntegerField(default=0, read_only=True)

    class Meta:
        model = Blog
        fields = ['title', 'content', 'likes', 'comment_num', 'restaurant']

    def create(self, validated_data):
        x = Restaurant.objects.get(owner=self.context['request'].user)
        return super().create({**validated_data, **{'restaurant': x}})

