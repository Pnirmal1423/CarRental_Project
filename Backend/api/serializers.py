from rest_framework import serializers
from .models import Car, CarBooking


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    car = CarSerializer(read_only=True)

    class Meta:
        model = CarBooking     # ✅ FIXED
        fields = "__all__"
