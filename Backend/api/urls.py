from django.urls import path
from .views import signup, getCars
from .views import search_cars

urlpatterns = [
    path('signup/', signup),
    path('cars/', getCars),
    path('cars/search/', search_cars),
]
