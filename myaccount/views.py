# from django.shortcuts import render# type: ignore
from rest_framework.response import Response# type: ignore
from rest_framework import status# type: ignore
from rest_framework.views import APIView# type: ignore
from myaccount.serializers import UserProfileSerializer, RegistrationSerializer, LoginSerializer
from .models import NewUserManagement
# from django.contrib.auth import authenticate# type: ignore
from myaccount.renderers import UserRenderer# type: ignore
from rest_framework_simplejwt.tokens import RefreshToken# type: ignore
from pymongo import MongoClient
import bson.json_util as json_util
import logging
from django.db import transaction, IntegrityError, DatabaseError

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
        user = NewUserManagement.objects.filter(email=email).first()
        print(type(user))
        client = MongoClient("mongodb://localhost:27017")
        db = client["poparidedb"]
        print("Connected")
        # Access the user collection
        user_collection = db['myaccount_newusermanagement']
        # Retrieve user whose email is same as input fields
        user_data = user_collection.find_one({'email': str(user)})  
        print(user_data)   
        data = json_util.dumps(user_data)
        data = data.replace('/' , "")   
        print(data)
        if user and user.check_password(password):
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'Login Success','user' : data , 'username' : user_data['name'].capitalize() ,'user_email' : user_data['email'] , "Initial" : user_data['name'][0].upper()}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': {'non_field_errors': ['Email or Password is not valid']}}, status=status.HTTP_404_NOT_FOUND)


class RegisterView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = RegistrationSerializer(data=request.data)
        print(serializer)
        print(serializer.initial_data)
        try:
            print(serializer.is_valid(raise_exception= True))
        except DatabaseError as db:
            return Response({"error" : "Email already exists"})
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email')
            print("eMAIL",email)
            client = MongoClient('mongodb://localhost:27017/')
            db = client['poparidedb']  # Replace with your database
            collection = db['myaccount_newusermanagement']

            print("IS VALID" ,NewUserManagement.objects.filter(email=email).exists())
            if collection.find_one({"email": email}) or NewUserManagement.objects.filter(email=request.data.get('email')).exists():
                return Response({'error': 'Email already exists'})
            
            try:
                user = serializer.save()
                token = get_tokens_for_user(user)

                # MongoDB operations
                client = MongoClient("mongodb://localhost:27017")
                db = client["poparidedb"]
                user_collection = db['myaccount_newusermanagement']

                user_data = user_collection.find_one({'email': str(user)})
                if not user_data:
                    raise Response({'error' : 'User data not found in MongoDB'})

                data = json_util.dumps(user_data).replace('/', "")
                return Response({
                    'token': token,
                    'msg': 'Registration Successful',
                    'user': data,
                    'username': user_data['name'].capitalize(),
                    'user_email': user_data['email'],
                    'Initial': user_data['name'][0].upper()
                }, status=status.HTTP_201_CREATED)

            except IntegrityError as e:
                # logger.error(f"IntegrityError during registration: {str(e)}")
                return Response({'error': 'Database integrity error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            except DatabaseError as e:
                # logger.error(f"DatabaseError during registration: {str(e)}")
                return Response({'error': f'Database error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            except Exception as e:
                # logger.error(f"Unexpected error during registration: {str(e)}")
                return Response({'error': f'An unexpected error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            print("Email exists")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
