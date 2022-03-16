from django.core.exceptions import BadRequest
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from rest_framework.generics import UpdateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Food
from restaurants.serializers.editMenu import EditMenuSerializer


class EditMenu(UpdateAPIView):
    serializer_class = EditMenuSerializer
    permission_class = [IsAuthenticated]

    # https://stackoverflow.com/questions/60258388/how-to-update-multiple-objects-in-django-rest-framework
    def get_object(self, f_name):
        try:
            return Food.objects.get(restaurant=self.request.user.restaurant,
                                    food_name=f_name)
        except (Food.DoesNotExist, ValidationError):
            raise BadRequest("food id does not exist")

    def put(self, request, *args, **kwargs):
        if self.request.user.is_anonymous:
            raise AuthenticationFailed()
        data = request.data
        instances = []
        for temp_dict in data:
            obj = self.get_object(temp_dict['food_name'])
            if 'food_name' in temp_dict:
                obj.food_name = temp_dict['food_name']
            if 'price' in temp_dict:
                obj.price = temp_dict['price']
            if 'description' in temp_dict:
                obj.description = temp_dict['description']
            obj.save()
            instances.append(obj)
        serializer = EditMenuSerializer(instances, many=True)
        return Response(serializer.data)
