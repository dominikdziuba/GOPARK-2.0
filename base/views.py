from django.shortcuts import render
from rest_framework import generics
from .models.Cars import *
class CarsView(generics.CreateAPIView):
    queryset = Cars.objects.all()
    serializer_class = CarsSerializer