from django.contrib import admin
from django.urls import path, include
from accounts import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('login/', views.LoginView.as_view(), name="login"),
    path('register/', views.RegisterView.as_view(), name="register"),
]
