from rest_framework import status
from rest_framework.generics import UpdateAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated


from accounts.serializers.userSerializer import EditUserSerializer


class UpdateUserView(RetrieveAPIView, UpdateAPIView):
    serializer_class = EditUserSerializer
    permission_class = [IsAuthenticated]

    def get_object(self):
        return self.request.user