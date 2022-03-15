from django.core.exceptions import BadRequest
from rest_framework.exceptions import APIException
from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from socials.models import Follow
from socials.serializers.followRestaurantSerializer import \
    FollowRestaurantSerializer


class FollowRestaurantView(CreateAPIView):
    serializer_class = FollowRestaurantSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        curr_restaurant = get_object_or_404(Restaurant, restaurant_name=kwargs[
            'restaurant_name'])
        if Follow.objects.filter(user=self.request.user,
                                 restaurant=curr_restaurant).exists():
            raise BadRequest("You already followed this restaurant")
        return super().post(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        request.data.update({'user': request.user.pk, 'restaurant': get_object_or_404(Restaurant, restaurant_name=kwargs[
            'restaurant_name']).pk})
        return super(FollowRestaurantView, self).create(request, *args, **kwargs)
