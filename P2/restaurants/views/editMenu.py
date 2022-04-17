from django.core.exceptions import BadRequest
from django.db import IntegrityError
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from rest_framework.generics import UpdateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Food, Restaurant
from restaurants.serializers.editMenu import EditMenuSerializer


class EditMenu(UpdateAPIView):
    serializer_class = EditMenuSerializer
    permission_class = [IsAuthenticated]

    # https://stackoverflow.com/questions/60258388/how-to-update-multiple-objects-in-django-rest-framework
    def get_food(self, f_id):
        try:
            food = Food.objects.get(id=f_id)
            if food.restaurant.owner != self.request.user:
                raise BadRequest('You do not have permission to edit!')
            return food
        except (Food.DoesNotExist, ValidationError):
            raise BadRequest("Food does not exist")

    def put(self, request, *args, **kwargs):
        if self.request.user.is_anonymous:
            raise AuthenticationFailed()

        try:
            Restaurant.objects.get(owner=self.request.user)
        except Restaurant.DoesNotExist:
            raise BadRequest('You do not have a restaurant yet!')

        data = request.data
        instances = []
        for temp_dict in data:
            obj = self.get_food(temp_dict['id'])
            if 'food_name' in temp_dict and temp_dict['food_name'] != "":
                obj.food_name = temp_dict['food_name']
            if 'price' in temp_dict and temp_dict['price'] != "":
                obj.price = temp_dict['price']
            if 'description' in temp_dict:
                obj.description = temp_dict['description']
            try:
                obj.save()
            except IntegrityError:
                raise BadRequest('Your foods name need to be unique!')
            except ValueError:
                raise BadRequest('Inappropriate data format!')
            instances.append(obj)
        serializer = EditMenuSerializer(instances, many=True)
        return Response(serializer.data)
