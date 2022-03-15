from rest_framework import serializers

from socials.models import Blog


class FeedSerializer(serializers.ModelSerializer):
    restaurant = serializers.CharField(source='restaurant.get_name',
                                       read_only=True)

    class Meta:
        model = Blog
        fields = '__all__'
