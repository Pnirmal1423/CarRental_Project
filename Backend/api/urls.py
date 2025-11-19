from django.urls import path
from .views import signup, getCars

urlpatterns = [
    path('signup/', signup),
    path('cars/', getCars),
]
