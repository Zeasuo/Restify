from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.serializers.addFood import AddFoodSerializer


class AddRestaurantAvatar(CreateAPIView):
    serializer_class = AddFoodSerializer
    permission_class = [IsAuthenticated]
