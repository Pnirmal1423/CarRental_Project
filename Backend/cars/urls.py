from django.urls import path
from . import views

urlpatterns = [
    path('api/cars/', views.get_cars, name='get_cars'),
]