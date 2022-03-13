from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from accounts.models import User
from restaurants.models import Restaurant


def like_view(self):
    pass


def unlike_view(self):
    pass


@api_view(['GET'])
def follow_view(request, restaurant_pk):
    user = get_object_or_404(User, id=request.user.pk)
    user.followings.add(get_object_or_404(Restaurant, id=restaurant_pk))
    return Response({'Success': 'you followed this restaurant'})


@api_view(['GET'])
def unfollow_view(request, restaurant_pk):
    user = get_object_or_404(User, id=request.user.pk)
    user.followings.remove(get_object_or_404(Restaurant, id=restaurant_pk))
    return Response({'Success': 'you unfollowed this restaurant'})


def comment_view(self):
    pass
