from rest_framework.exceptions import APIException
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from socials.models import Follow
from socials.serializers import followRestaurantSerializer


class FollowRestaurantView(APIView):
    serializer_class = followRestaurantSerializer
    permission_class = [IsAuthenticated]
    queryset = Follow.objects.all()

    def post(self, request, *args, **kwargs):
        try:
            Follow.objects.get(user=self.request.user, restaurant=self.request.restaurant_name)
            raise APIException("You already followed this restaurant")
        except Follow.DoesNotExist:
            return super().post(request, *args, **kwargs)


