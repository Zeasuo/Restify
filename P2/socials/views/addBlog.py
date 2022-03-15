from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from socials.models import Blog
from socials.serializers.addBlog import AddBlogSerializer


class AddBlog(CreateAPIView):
    serializer_class = AddBlogSerializer
    permission_class = [IsAuthenticated]
    queryset = Blog.objects.all()

    def post(self, request, *args, **kwargs):

        # https://stackoverflow.com/questions/3090302/how-do-i-get-the-object-if-it-exists-or-none-if-it-does-not-exist-in-django
        return super().post(request, *args, **kwargs)
