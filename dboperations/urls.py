from django.urls import path,include
from dboperations import views
from .views import RegisterUserView
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'User',UserCreateViewSet)
urlpatterns = [
    # path("", views.student_data),
    # path("", views.newUser),
    path('register/', RegisterUserView.as_view(), name='register'),
    # path('api/',include(router.urls)),

    
]
