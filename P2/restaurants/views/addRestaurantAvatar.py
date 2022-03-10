from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import RestaurantImage
from restaurants.serializers.addRestaurantAvatar import AddRestaurantAvatarSerializer


class AddRestaurantAvatar(CreateAPIView):
    serializer_class = AddRestaurantAvatarSerializer
    permission_class = [IsAuthenticated]
