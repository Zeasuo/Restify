from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from restaurants.models import Restaurant
from socials.models import Comment


class AddCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

    # def create(self, validated_data):
    #     print(self.context)
    #     curr_restaurant = get_object_or_404(Restaurant, restaurant_name=self.context[
    #         'request']['restaurant_name'])
    #
    #     curr_user = self.context['request'].user
    #     return super().create({**validated_data, **{'restaurant': curr_restaurant},
    #                            **{'user': curr_user}})

