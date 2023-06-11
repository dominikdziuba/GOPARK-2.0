from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('history', index),
    path('addcar', index),
    path('cars', index),
    path('home', index),
    path('paying', index),

]