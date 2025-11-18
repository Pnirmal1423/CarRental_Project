from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer

@api_view(['GET'])
def get_cars(request):
    # 1. Get all cars from the database
    cars = Car.objects.all()
    # 2. Convert them to JSON
    serializer = CarSerializer(cars, many=True)
    # 3. Return the JSON
    return Response(serializer.data)