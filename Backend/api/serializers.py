from rest_framework import serializers
from .models import Car, CarBooking


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):

    user_name = serializers.CharField(source="user.name", read_only=True)
    user_email = serializers.CharField(source="user.email", read_only=True)

    car_name = serializers.CharField(source="car.car_name", read_only=True)
    car_image = serializers.CharField(source="car.car_image", read_only=True)

    class Meta:
        model = CarBooking
        fields = [
            "id",
            "user",
            "car",
            "start_date",
            "end_date",
            "total_price",
            "payment_method",
            "customer_name",
            "customer_phone",
            "customer_address",

            # extra fields for admin dashboard
            "user_name",
            "user_email",
            "car_name",
            "car_image",
        ]
