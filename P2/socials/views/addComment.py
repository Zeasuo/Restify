from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from socials.serializers.addCommentSerializer import AddCommentSerializer


class AddCommentView(CreateAPIView):

    serializer_class = AddCommentSerializer
    permission_class = [IsAuthenticated]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["user"] = self.request.user
        context["restaurant"] = get_object_or_404(Restaurant, restaurant_name=self.kwargs[
                 'restaurant_name'])
        return context

    # def perform_create(self, serializer):
    #     curr_restaurant = get_object_or_404(Restaurant, restaurant_name=self.kwargs[
    #         'restaurant_name'])
    #     serializer.save(user=self.request.user, restaurant=curr_restaurant)

