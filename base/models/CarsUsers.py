from django.db import models
from rest_framework import serializers
from .Users import Users
from .Cars import Cars

class CarsUsers(models.Model):
    id_usersFK = models.ForeignKey(Users, on_delete=models.CASCADE)
    id_carsFK = models.ForeignKey(Cars, on_delete=models.CASCADE)

class Meta:
    app_label = 'base'

class CUSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsUsers
        fields = ['id_usersFK', 'id_carsFK']