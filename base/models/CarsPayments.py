from django.db import models
from rest_framework import serializers
from .Cars import Cars
from .Payments import Payments

class CarsPayments(models.Model):
    id_carsFK = models.ForeignKey(Cars, on_delete=models.CASCADE)
    id_paymentsFK = models.ForeignKey(Payments, on_delete=models.CASCADE)

class Meta:
    app_label = 'base'


class CPSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsPayments
        fields = ['id_carsFK', 'id_paymentsFK']
