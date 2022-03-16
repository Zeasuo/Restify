from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.generics import UpdateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Food
from restaurants.serializers.editMenu import EditMenuSerializer


class EditMenu(UpdateAPIView):
    serializer_class = EditMenuSerializer
    permission_class = [IsAuthenticated]

    # https://stackoverflow.com/questions/60258388/how-to-update-multiple-objects-in-django-rest-framework
    def get_object(self, food_id):
        try:
            return Food.objects.get(restaurant=self.request.user.restaurant,
                                    id=food_id)
        except (Food.DoesNotExist, ValidationError):
            raise status.HTTP_400_BAD_REQUEST

    def put(self, request, *args, **kwargs):
        data = request.data
        instances = []
        for temp_dict in data:
            obj = self.get_object(temp_dict['id'])
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
