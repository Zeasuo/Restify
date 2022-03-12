from rest_framework.generics import UpdateAPIView, get_object_or_404, \
    RetrieveAPIView, ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Food, Restaurant
from restaurants.serializers.editMenu import EditMenuSerializer


class EditMenu(RetrieveAPIView, UpdateAPIView):
    serializer_class = EditMenuSerializer
    permission_class = [IsAuthenticated]

    def get_object(self):
        x = Restaurant.objects.get(owner=self.request.user)
        foods = [food for food in Food.objects.all()]
        return foods
