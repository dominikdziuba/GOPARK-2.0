from .models.Cars import *
from .models.User import *
from .models.Payments import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import User
from .models.User import UserBackend
from django.contrib.auth.models import User
from django.views import View
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.reverse import reverse
from django.shortcuts import redirect

class UserLoginView(generics.GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Sprawdzenie poprawności danych logowania
        user = UserBackend().authenticate(request=request, email=email, password=password)
        print(user)

        if user is not None:
            # Logowanie udane - generowanie tokena uwierzytelniającego
            token, _ = Token.objects.get_or_create(user_id=user.id)
            login(request, user)
            redirect_url = reverse('cars')
            return redirect(redirect_url)

        else:
            # Logowanie nieudane
            return Response({'error': 'Invalid credentials'}, status=401)

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer

class CarsView(generics.ListAPIView):
    queryset = Cars.objects.all()
    serializer_class = CarsSerializer

class AddCarView(generics.CreateAPIView):
    serializer_class = CarsSerializer


class PaymentsView(APIView):
    def get(self, request):
        payments = Payments.objects.all()
        serializer = PaymentsSerializer(payments, many=True)
        return Response(serializer.data)