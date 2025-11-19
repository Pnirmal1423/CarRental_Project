from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Car
from .serializers import CarSerializer

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


@api_view(['GET'])
def getCars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
