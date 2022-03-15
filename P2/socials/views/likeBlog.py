from rest_framework.generics import CreateAPIView, DestroyAPIView


class LikeBlogView(CreateAPIView):
    pass


class UnLikeBlogView(DestroyAPIView):
    pass
