from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models.Cars import *
from.models.Payments import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models.Cars import *
from.models.Payments import *


class CarsView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        cars = Cars.objects.filter(owner=request.user)
        serializer = CarsSerializer(cars, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CarsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    

class PaymentsView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PaymentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    

class PaymentsHistoryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        payments = Payments.objects.filter(car__owner=request.user)
        serializer = PaymentsSerializer(payments, many=True)
        return Response(serializer.data)
