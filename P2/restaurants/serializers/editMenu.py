from rest_framework import serializers

from restaurants.models import Food


class EditMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

