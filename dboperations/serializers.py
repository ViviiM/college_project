# users/serializers.py
from rest_framework import serializers
from .models import User,LoginUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password = validated_data['password']
        )
        # user.set_password(validated_data['password'])
        user.save()
        return user
    

class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginUser
        fields = ['exemail','expassword']
    