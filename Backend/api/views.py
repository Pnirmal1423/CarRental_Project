from django.contrib.auth.hashers import make_password, check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import User, Car, CarBooking
from .serializers import CarSerializer, BookingSerializer


# -----------------------------
# USER SIGNUP
# -----------------------------
@api_view(['POST'])
def signup(request):
    try:
        data = request.data

        User.objects.create(
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
# LOGIN (Admin + User)
# -----------------------------
@api_view(['POST'])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response({"error": "Email and password required"}, status=400)

    # USER LOOKUP
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"error": "Invalid email"}, status=400)

    # PASSWORD CHECK
    if not check_password(password, user.password):
        return Response({"error": "Invalid password"}, status=400)

    # ADMIN CHECK (only one fixed admin)
    is_admin = (email == "nirmal@gmail.com")

    return Response({
        "message": "Login successful",
        "user_id": user.id,
        "name": user.name,
        "email": user.email,
        "is_admin": is_admin
    })


# -----------------------------
# GET ALL CARS
# -----------------------------
@api_view(['GET'])
def getCars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


# -----------------------------
# CREATE BOOKING
# -----------------------------
@api_view(['POST'])
def create_booking(request):
    try:
        data = request.data

        user_id = data.get("user") or data.get("user_id")
        car_id = data.get("car") or data.get("car_id")

        if not user_id:
            return Response({"error": "user id required"}, status=400)

        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=400)

        try:
            car = Car.objects.get(id=car_id)
        except Car.DoesNotExist:
            return Response({"error": "Car not found"}, status=400)

        booking = CarBooking.objects.create(
            user=user,
            car=car,

            # FIXED FIELD MAPPING
            customer_name=data.get("name"),
            customer_phone=data.get("phone"),
            customer_address=data.get("address"),

            start_date=data.get("start_date"),
            end_date=data.get("end_date"),
            total_price=data.get("total_price"),
            payment_method=data.get("payment_method", "Cash")
        )

        serializer = BookingSerializer(booking)
        return Response(serializer.data, status=201)

    except Exception as e:
        print("BOOKING ERROR:", e)
        return Response({"error": str(e)}, status=400)


# -----------------------------
# GET ALL BOOKINGS (User History)
# -----------------------------
@api_view(['GET'])
def get_bookings(request):
    bookings = CarBooking.objects.all().order_by('-id')
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)


# -----------------------------
# ADMIN BOOKINGS (Dashboard)
# -----------------------------
@api_view(['GET'])
def admin_bookings(request):
    bookings = CarBooking.objects.select_related("user", "car").order_by('-id')
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)
