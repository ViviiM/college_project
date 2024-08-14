from django.urls import path,include
from dboperations import views

urlpatterns = [
    path("", views.student_data),
    path("", views.newUser)
]
