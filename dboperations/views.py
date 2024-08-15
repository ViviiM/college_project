from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Students, signup,User,LoginUser
from django.http import HttpResponse,JsonResponse
from rest_framework import generics,viewsets
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
# def student_data(request):
#     student_names = Students.student_data.names_list
#     return JsonResponse({'student_names': student_names})
# def student_data(request):
#     return HttpResponse("Checking...")

# def userdate(request):
#     name = request.GET.get('fname')


# def newUser(request):
#     objVar = signup
#     return JsonResponse({'Just ':objVar})


# class UserCreateViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



@api_view(['POST'])
def login(request):
    email = request.data.get('exemail')
    password = request.data.get('expassword')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = LoginUser.objects.get(email=email)
        if user.password == password:
            return Response({'success': 'User authenticated'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
    except LoginUser.DoesNotExist:
        return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)