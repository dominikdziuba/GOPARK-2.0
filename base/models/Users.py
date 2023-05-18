from django.db import models
from rest_framework import serializers

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)

class Meta:
    app_label = 'base'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = {'id','email', 'password'}
