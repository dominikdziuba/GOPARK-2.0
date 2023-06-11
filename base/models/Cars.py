from django.db import models
from rest_framework import serializers

class Cars(models.Model):
    id = models.AutoField(primary_key=True)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    register_num = models.CharField(max_length=100)
    image = models.CharField()

class Meta:
    app_label = 'base'

class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cars
        fields = ('id','brand', 'model', 'register_num', 'image')
