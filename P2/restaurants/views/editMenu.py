from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.generics import UpdateAPIView, get_object_or_404, \
    RetrieveAPIView, ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Food, Restaurant
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
            food_name = temp_dict['food_name']
            price = temp_dict['price']
            description = temp_dict['description']
            obj = self.get_object(temp_dict['id'])
            obj.food_name = food_name
            obj.price = price
            obj.description = description
            obj.save()
            instances.append(obj)
        serializer = EditMenuSerializer(instances, many=True)
        return Response(serializer.data)
