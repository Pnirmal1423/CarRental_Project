# Create your models here.
from django.db import models

class Car(models.Model):
    brand = models.CharField(max_length=100)       # e.g., Toyota
    model = models.CharField(max_length=100)       # e.g., Innova Crysta
    year = models.IntegerField()                   # e.g., 2023
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2) # e.g., 2500.00
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.brand} {self.model}"