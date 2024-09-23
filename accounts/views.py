from django.shortcuts import render# type: ignore
from rest_framework.response import Response# type: ignore
from rest_framework import status# type: ignore
from rest_framework.views import APIView# type: ignore
from accounts.serializers import UserProfileSerializer, RegistrationSerializer, LoginSerializer
from .models import UserManagement
from django.contrib.auth import authenticate# type: ignore
from accounts.renderers import UserRenderer# type: ignore
from rest_framework_simplejwt.tokens import RefreshToken# type: ignore
from pymongo import MongoClient
import bson.json_util as json_util
# Create your views here.

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class LoginView(APIView):
    renderer_classes = [UserRenderer]
    
    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        # Manually authenticate the user
        user = UserManagement.objects.filter(email=email).first()
        print(type(user))
        client = MongoClient("mongodb://localhost:27017")
        db = client["poparidedb"]
        print("Connected")
        # Access the user collection
        user_collection = db['accounts_usermanagement']
        # Retrieve user whose email is same as input fields
        user_data = user_collection.find_one({'email': str(user)})  
        print(user_data)   
        data = json_util.dumps(user_data)
        data = data.replace('/' , "")   
        if user and user.check_password(password):
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'Login Success','user' : data , 'username' : user_data['name'].capitalize() ,'user_email' : user_data['email'] , "Initial" : user_data['name'][0].upper()}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': {'non_field_errors': ['Email or Password is not valid']}}, status=status.HTTP_404_NOT_FOUND)


class RegisterView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = RegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        client = MongoClient("mongodb://localhost:27017")
        db = client["poparidedb"]
        print("Connected")
        # Access the user collection
        user_collection = db['accounts_usermanagement']
        # Retrieve user whose email is same as input fields
        user_data = user_collection.find_one({'email': str(user)})  
        print(user_data)      
        data = json_util.dumps(user_data)
        data = data.replace('/' , "")
        return Response({'token':token, 'msg':'Registration Successful' , 'user' : data, 'username' : user_data['name'].capitalize() ,'user_email' : user_data['email'] , "Initial" : user_data['name'][0].upper()}, status=status.HTTP_201_CREATED)
