from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')

def cars(request):
    return HttpResponse('Cars')

def payments(request):
    return HttpResponse('Payments')
