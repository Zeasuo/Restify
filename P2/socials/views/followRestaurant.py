from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from socials.models import Follow
from socials.serializers import followRestaurantSerializer


class FollowRestaurantView(CreateAPIView):
    serializer_class = followRestaurantSerializer
    permission_class = [IsAuthenticated]
    queryset = Follow.objects.all()



