from django.db import models
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email


class Car(models.Model):
    car_name = models.CharField(max_length=100)
    car_brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    fuel_type = models.CharField(max_length=50)
    seat_capacity = models.IntegerField()
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.TextField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.car_name
