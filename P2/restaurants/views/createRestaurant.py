from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.serializers.createRestaurant import CreateRestaurantSerializer


class CreateRestaurant(CreateAPIView):
    serializer_class = CreateRestaurantSerializer
    permission_class = [IsAuthenticated]
