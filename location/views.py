from django.http import JsonResponse
from geopy.geocoders import Nominatim
from django.views.decorators.http import require_GET

@require_GET
def location_suggestions(request):
    query = request.GET.get('query', '')
    if not query:
        return JsonResponse([], safe=False)

    geolocator = Nominatim(user_agent="location_suggestions")
    locations = geolocator.geocode(query + ", India", exactly_one=False, limit=5, addressdetails=True)
    
    suggestions = []
    if locations:
        for location in locations:
            if 'country' in location.raw['address'] and location.raw['address']['country'] == 'India':
                suggestions.append(location.address)
    
    return JsonResponse(suggestions, safe=False)

from rest_framework import serializers, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Route
class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'

@api_view(['POST'])
def post_route(request):
    serializer = RouteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def search_routes(request):
    start_location = request.query_params.get('start')
    end_location = request.query_params.get('end')
    stops = request.query_params.getlist('stops')
    print(start_location,end_location,stops)
    # Perform query based on the parameters
    routes = Route.objects.filter(
        start_coords__icontains=start_location,
        end_coords__icontains=end_location,
        stops__in=stops
    )
    serializer = RouteSerializer(routes, many=True)
    return Response(serializer.data)
