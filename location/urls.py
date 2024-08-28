from django.urls import path
from .views import location_suggestions,post_route,search_routes

urlpatterns = [
    path("location/",location_suggestions,name="location_suggestions"),
    #  path('get-shortest-path/', get_shortest_path, name='get_shortest_path'),
     path('routes/', post_route, name='post_route'),
    path('routes/search/', search_routes, name='search_routes'),
]