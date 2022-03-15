from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from socials.serializers.addNotification import AddNotificationSerializer


class AddNotificationView(CreateAPIView):
    serializer_class = AddNotificationSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print(request.POST)
        return self.create(request, *args, **kwargs)
