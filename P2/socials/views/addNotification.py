from django.core.exceptions import BadRequest
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from accounts.models import User
from restaurants.models import Restaurant
from socials.models import Blog, Notification
from socials.serializers.addNotification import AddNotificationSerializer


class AddNotificationView(CreateAPIView):
    serializer_class = AddNotificationSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        if self.request.user.is_anonymous:
            raise AuthenticationFailed()

        if not User.objects.filter(username=kwargs['target_user_name']).exists():
            raise BadRequest('The target user is not exist')

        if 'action' not in request.data or 'Target' not in request.data or 'target_id' not in request.data:
            raise BadRequest('Something goes wrong!')

        if (request.data['action'] == 'comment' or request.data['action'] == 'follow') and request.data['Target'] == 'blog':
            raise BadRequest('Your action is not appropriate for a blog')

        if request.data['Target'] == 'blog':
            try:
                Blog.objects.get(id=kwargs['target_id'])
            except Blog.DoesNotExist:
                raise BadRequest('The blog does not exist')

        elif request.data['Target'] == 'rest':
            try:
                Restaurant.objects.get(id=kwargs['target_id'])
            except Blog.DoesNotExist:
                raise BadRequest('The restaurant does not exist')

        try:
            Notification.objects.get(user=request.user, action=request.data['action'], target_id=request.data['Target'])
            raise BadRequest("The Notification is duplicate!")
        except Notification.DoesNotExist:
            return self.create(request, *args, **kwargs)
