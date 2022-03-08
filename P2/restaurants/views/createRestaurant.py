from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from restaurants.serializers.createRestaurant import CreateRestaurantSerializer


class CreateRestaurant(CreateAPIView):
    serializer_class = CreateRestaurantSerializer
    permission_class = [IsAuthenticated]
    queryset = Restaurant.objects.all()
