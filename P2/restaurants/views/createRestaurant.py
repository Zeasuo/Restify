from rest_framework.exceptions import APIException
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from restaurants.serializers.createRestaurant import CreateRestaurantSerializer


class CreateRestaurant(CreateAPIView):
    serializer_class = CreateRestaurantSerializer
    permission_class = [IsAuthenticated]
    queryset = Restaurant.objects.all()

    def post(self, request, *args, **kwargs):
        if self.request.user.restaurant:
            raise APIException("You already has a restaurant")
        return super().post(request, *args, **kwargs)