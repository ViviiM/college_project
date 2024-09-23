from django.urls import path,include
# from dboperations import views
from .views import save_driver_details,allDrivers
# from rest_framework.routers import DefaultRouter


urlpatterns = [

    path('save-driver/', save_driver_details, name='save_driver'),
    path('all_drivers/' ,allDrivers,name="Alldriver" )

]
