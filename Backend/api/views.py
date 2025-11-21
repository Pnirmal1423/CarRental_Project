from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User, Car
from .serializers import CarSerializer


# -----------------------------
# USER SIGNUP
# -----------------------------
@api_view(['POST'])
def signup(request):
    try:
        data = request.data

        user = User.objects.create(
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            password=make_password(data.get('password'))
        )

        return Response({"message": "User created successfully"})

    except Exception as e:
        print("SIGNUP ERROR:", e)
        return Response({"error": "Server error"}, status=500)


# -----------------------------
# GET ALL CARS
# -----------------------------
@api_view(['GET'])
def getCars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


# -----------------------------
# SEARCH / FILTER CARS BY PRICE
# -----------------------------
@api_view(['GET'])
def search_cars(request):
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    cars = Car.objects.all()

    if min_price:
        cars = cars.filter(price_per_day__gte=min_price)

    if max_price:
        cars = cars.filter(price_per_day__lte=max_price)

    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
