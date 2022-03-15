from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'avatar', 'followers', 'followings', 'like',
                  'email', 'birthday']


class CreateUserSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'password1', 'first_name', 'last_name', 'email', 'birthday', 'phone_number']

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            birthday=validated_data['birthday'],
            phone_number=validated_data['phone_number']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class EditUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'avatar', 'email', 'birthday', 'phone_number']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
