from django.db import models
from rest_framework import serializers

class Payments(models.Model):
    id = models.AutoField(primary_key=True)
    payment_number = models.CharField(max_length=100)
    street_name = models.CharField(max_length=100)
    register_number = models.CharField(max_length=100)
    parking_time = models.CharField(max_length=100)

class Meta:
    app_label = 'base'

class PaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payments
        fields = ['id', 'payment_number', 'street_name', 'register_number', 'parking_time']
