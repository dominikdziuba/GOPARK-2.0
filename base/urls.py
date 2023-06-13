from django.urls import path
from .views import *

urlpatterns = [
    path('cars/', CarsView.as_view(), name="cars"),
    path('payments/', PaymentsView.as_view(), name="payments"),

]