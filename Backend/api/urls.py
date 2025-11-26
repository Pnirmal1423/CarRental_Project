from django.urls import path
from .views import (
    signup, login, getCars,
    create_booking, get_bookings,
    admin_bookings
)

urlpatterns = [
    path("signup/", signup),
    path("login/", login),
    path("cars/", getCars),
    path("book/", create_booking),
    path("bookings/", get_bookings),
    path("admin-bookings/", admin_bookings),
]
