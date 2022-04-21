from rest_framework import serializers
from socials.models import Blog


class GetRandomBlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
