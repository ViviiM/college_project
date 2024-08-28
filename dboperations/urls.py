from django.urls import path,include
from dboperations import views
from .views import RegisterUserView,save_driver_details
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'User',UserCreateViewSet)
urlpatterns = [
    # path("", views.student_data),
    # path("", views.newUser),
    path('register/', RegisterUserView.as_view(), name='register'),
    # path('api/',include(router.urls)),
     path('login/', views.login, name='login'),
     path('login_data/',views.login_data,name='login_data'),
    path('save-driver/', save_driver_details, name='save_driver'),


]
