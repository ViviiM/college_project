from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Students, signup
from django.http import HttpResponse,JsonResponse
# Create your views here.
def student_data(request):
    student_names = Students.student_data.names_list
    return JsonResponse({'student_names': student_names})
# def student_data(request):
#     return HttpResponse("Checking...")

def userdate(request):
    name = request.GET.get('fname')


def newUser(request):
    objVar = signup
    return JsonResponse({'Just ':objVar})