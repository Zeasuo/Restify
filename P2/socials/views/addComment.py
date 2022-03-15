from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from socials.serializers.addCommentSerializer import AddCommentSerializer


class AddCommentView(CreateAPIView):
    serializer_class = AddCommentSerializer
    permission_class = [IsAuthenticated]
