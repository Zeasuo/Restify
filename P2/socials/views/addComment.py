from rest_framework.exceptions import AuthenticationFailed
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from socials.serializers.addCommentSerializer import AddCommentSerializer


class AddCommentView(CreateAPIView):
    serializer_class = AddCommentSerializer
    permission_class = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        if self.request.user.is_anonymous:
            raise AuthenticationFailed()
        return super().post(request, *args, **kwargs)
