from django.shortcuts import render
# from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Driver
import json
# Create your views here.
# from django.contrib.auth import authenticate
# from django.shortcuts import render
# from .models import User,LoginUser
from django.http import HttpResponse,JsonResponse
# from rest_framework import generics,viewsets
# from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# from passlib.hash import pbkdf2_sha256
# from rest_framework.views import APIView
# import urllib.parse
# from rest_framework_simplejwt.tokens import RefreshToken
from pymongo import MongoClient

# class RegisterUserView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
    
# # from ..poparide import settings
# def user_data(exemail,expass):
#     # Connect to MongoDB
#     flag = False
#     client = MongoClient("mongodb://localhost:27017")
#     db = client["poparidedb"]
#     print("Connected")
#     # Access the user collection
#     user_collection = db['dboperations_user']
#     # Retrieve user whose email is same as input fields
#     user_names = user_collection.find_one({'email': exemail})
#     # print(user_names['password'],expass)
#     if user_names:
#         flag = True
#         if expass == user_names['password']:
#             print("User found")
#         else:
#             flag=False
#             print('Password wrong')
#     else:
#         flag = False
#         print("user not found")
#     # Close the connection
#     client.close()
#     return user_names,flag

# from .serializers import LoginUserSerializer
# @api_view(['POST'])
# def login(request):
#     print(request.data)
#     userdata = request.data.get('data')
#     # expassword = request.data.get('expassword')
#     print("Hello from login",userdata)
#     if not user_data :
#         return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    
#     name,flag = user_data(exemail=userdata['exemail'],expass=userdata['expassword'])
#     print(name)
#     # for i in name:
#     #     print(i + "hiii")
#     # print(list(name))
#         # user ,created = LoginUser.objects.get_or_create(exemail=exemail, defaults={"expassword":expassword})
#         # if not created:
#         #     return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)
#     user = authenticate(request, username=userdata['exemail'] , password = userdata['expassword'])
#     print(user)
#     if user is not None:
#         refresh = RefreshToken.for_user(user)
#         return Response({
#             'refresh': str(refresh),
#             'access': str(refresh.access_token),
#         })
#     if not flag:
#         return Response({'error': 'User does not exist or password is incorrect'}, status=status.HTTP_404_NOT_FOUND)
#     else:
#         return Response({'success': 'User authenticated' }, status=status.HTTP_200_OK)
#     return name

# @api_view(['GET'])
# def login_data(request):
#     alldata = request.GET.get('exemail')
#     print(alldata)
#     aldata =  urllib.parse.unquote(alldata)
#     elldata = request.GET.get('expassword')
#     print("heyyy",aldata , elldata)
#     usernames  = user_data(exemail=aldata,expass=elldata)
#     print("Hello",json_util.dumps(usernames))
#     return Response(json_util.dumps(usernames))


import bson.json_util as json_util

@csrf_exempt
def save_driver_details(request):
    if request.method == 'POST':    
        data = json.loads(request.body)
        if data.get('is_checked'):  # Check if the checkbox is checked
            driver = Driver(
                Drivername = data['name'],
                DriverEmail = data['email'],
                Price = data['price'],
                origin=data['origin'],
                destinations=data['destinations'],
                stops=data['stops'],
                radio_choice=data['radio_choice'],
                is_checked=data['is_checked']
            )
            driver.save()
            client = MongoClient("mongodb://localhost:27017")
            db = client["poparidedb"]
            print("Connected")
            # Access the user collection
            driver_collection = db['dboperations_driver']
            # Retrieve user whose email is same as input fields
            data = driver_collection.find_one({'DriverEmail': data['email']})  
            print(data)      
            data = json_util.dumps(data)
            data = data.replace('/' , "")
            return JsonResponse({'message': 'Driver details saved successfully!' , "Driver" : data}, status = 200 )
        else:
            return JsonResponse({'message': 'Checkbox not checked, data not saved.' , "Driver" : "No Driver"}, status=200)


    return JsonResponse({'message': 'Invalid request'}, status=400)

@api_view(['GET'])
def allDrivers(request):
    client = MongoClient("mongodb://localhost:27017")
    db = client["poparidedb"]
    print("Connected")
    # Access the user collection
    driver_collection = db['dboperations_driver']
    # Retrieve user whose email is same as input fields
    data = driver_collection.find()  
    driversname = []
    driveremail = []
    ticketprice = []
    origin = []
    destination = []
    stops = []
    seats = []
    for i in data:
        driversname.append(i['Drivername'])
        driveremail.append(i['DriverEmail'])
        ticketprice.append(i['Price'])
        origin.append(i['origin'])
        destination.append(i['destinations'])
        stops.append(i['stops'])
        seats.append(i['radio_choice'])
    collection = db['accounts_usermanagement']
    update = []
    for i in driveremail:
        x = collection.find_one({"email" : i})
        if x != None:
            update.append(x['updated_at'])
    return Response({"DriverName" : driversname,"DriverEmail" : driveremail, "Price" : ticketprice,
                     "Origin" : origin , "Destination" : destination , "stops" : stops , "Time" : update ,"seats" : seats})