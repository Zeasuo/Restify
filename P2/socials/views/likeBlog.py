from django.core.exceptions import BadRequest
from rest_framework import status
from rest_framework.generics import CreateAPIView, DestroyAPIView, \
    get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Restaurant
from socials.models import Blog, BlogLike, RestaurantLike
from socials.serializers.likeBlogSerializer import LikeBlogSerializer


class LikeBlogView(CreateAPIView):
    serializer_class = LikeBlogSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        curr_blog = get_object_or_404(Blog, id=kwargs[
            'blog_id'])
        if BlogLike.objects.filter(user=self.request.user,
                                         blog=curr_blog).exists():
            raise BadRequest("You already liked this blog")
        return super().post(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        request.data.update({'user': request.user.pk, 'blog': get_object_or_404(Blog, id=kwargs[
            'blog_id']).pk})
        return super(LikeBlogView, self).create(request, *args, **kwargs)


class UnLikeBlogView(DestroyAPIView):
    serializer_class = LikeBlogSerializer
    permission_class = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        curr_blog = get_object_or_404(Blog, id=kwargs[
            'blog_id'])

        try:
            like = BlogLike.objects.get(user=self.request.user, blog=curr_blog)
        except:
            raise BadRequest("You have not liked this blog")

        like.delete()

        return Response(status.HTTP_204_NO_CONTENT)
