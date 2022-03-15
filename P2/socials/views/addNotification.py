from django.core.exceptions import BadRequest
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from accounts.models import User
from restaurants.models import Restaurant
from socials.models import Blog
from socials.serializers.addNotification import AddNotificationSerializer


class AddNotificationView(CreateAPIView):
    serializer_class = AddNotificationSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        if not User.objects.filter(username=kwargs['user_name']).exists():
            raise BadRequest('The target user is not exist')
        elif (request.data['action'] == 'comment' or request.data['action'] == 'follow') and request.data['Target'] == 'blog':
            raise BadRequest('Your action is not appropriate for a blog')
        elif ('blog_id' not in request.data or not Blog.objects.filter(id=request.data['blog_id']).exists()) and request.data['Target'] == 'blog':
            raise BadRequest('You need to have a correct object to like/follow/comment')
        elif ('restaurant_id' not in request.data or not Restaurant.objects.filter(id=request.data['restaurant_id']).exists()) and request.data['Target'] == 'rest':
            raise BadRequest('You need to have a correct object to like/follow/comment')
        return self.create(request, *args, **kwargs)
