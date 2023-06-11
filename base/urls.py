from django.urls import path
from .views import *

urlpatterns = [
    path('cars/', CarsView.as_view(), name="cars"),
    path('addcar/', AddCarView.as_view(), name="addcar"),
    path('payments/', PaymentsView.as_view(), name="payments"),
    path('register/', UserRegistrationView.as_view(), name="registration"),
    path('login/', UserLoginView.as_view(), name='user_login')

]