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

    car_type = models.CharField(max_length=100, default="SUV")
    price = models.IntegerField(default=0)
    car_image = models.URLField(max_length=500, default="")

    fuel = models.CharField(max_length=50, default="Petrol")
    seats = models.IntegerField(default=5)
    transmission = models.CharField(max_length=50, default="Manual")

    available = models.BooleanField(default=True)

    def __str__(self):
        return self.car_name


class CarBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)

    start_date = models.DateField()
    end_date = models.DateField()

    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50, default="Cash")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking -> {self.user.email} | {self.car.car_name}"
