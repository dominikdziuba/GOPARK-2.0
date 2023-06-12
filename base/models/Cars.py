from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class Cars(models.Model):
    id = models.AutoField(primary_key=True)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    register_num = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    owner = models.ManyToManyField(User, through='CarsUsers')

class CarsUsers(models.Model):
    id_usersFK = models.ForeignKey(User, on_delete=models.CASCADE)
    id_carsFK = models.ForeignKey(Cars, on_delete=models.CASCADE)


class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cars
        fields = ('id','brand', 'model', 'register_num', 'image')