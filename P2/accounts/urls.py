from django.urls import path

from accounts.views import socialNetwork
from accounts.views.createUserView import CreateUserView
from accounts.views.getUserView import GetUserView
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.views.updateUserView import UpdateUserView

app_name = 'accounts'
urlpatterns = [
    path('user/<str:username>/details/', GetUserView.as_view(), name='user'),
    path('user/register/', CreateUserView.as_view(), name='create_user'),
    path('user/update/', UpdateUserView.as_view(), name='update_user'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('follow/<int:restaurant_pk>', socialNetwork.follow_view,
         name='follow'),
    path('unfollow/<int:restaurant_pk>', socialNetwork.unfollow_view,
         name='unfollow')
]
