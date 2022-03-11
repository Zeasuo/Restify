from rest_framework.exceptions import APIException
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant,Food
from restaurants.serializers.addMenu import AddMenuSerializer


class AddMenu(CreateAPIView):
    serializer_class = AddMenuSerializer
    permission_class = [IsAuthenticated]
    queryset = Food.objects.all()

    def post(self, request, *args, **kwargs):

        # https://stackoverflow.com/questions/3090302/how-do-i-get-the-object-if-it-exists-or-none-if-it-does-not-exist-in-django
        try:
            Restaurant.objects.get(owner=self.request.user)
            return super().post(request, *args, **kwargs)
        except Restaurant.DoesNotExist:
            raise APIException("You don't have a restaurant yet")

