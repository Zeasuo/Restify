from django.core.exceptions import BadRequest
from rest_framework import status
from rest_framework.generics import CreateAPIView, DestroyAPIView, \
    get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Restaurant
from socials.models import RestaurantLike
from socials.serializers.likeRestaurantSerializer import \
    LikeRestaurantSerializer


class LikeRestaurantView(CreateAPIView):
    serializer_class = LikeRestaurantSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        curr_restaurant = get_object_or_404(Restaurant, restaurant_name=kwargs[
            'restaurant_name'])
        if RestaurantLike.objects.filter(user=self.request.user,
                                 restaurant=curr_restaurant).exists():
            raise BadRequest("You already liked this restaurant")
        return super().post(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        request.data.update({'user': request.user.pk, 'restaurant': get_object_or_404(Restaurant, restaurant_name=kwargs[
            'restaurant_name']).pk})
        return super(LikeRestaurantView, self).create(request, *args, **kwargs)


class UnLikeRestaurantView(DestroyAPIView):
    serializer_class = LikeRestaurantSerializer
    permission_class = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        curr_restaurant = get_object_or_404(Restaurant, restaurant_name=kwargs[
            'restaurant_name'])

        try:
            like = RestaurantLike.objects.get(user=self.request.user, restaurant=curr_restaurant)
        except:
            raise BadRequest("You have not liked this restaurant")

        like.delete()

        return Response(status.HTTP_204_NO_CONTENT)
