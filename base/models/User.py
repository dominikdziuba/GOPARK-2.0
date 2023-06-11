from django.db import models
from rest_framework import serializers
from django.contrib.auth.hashers import make_password,check_password
from django.contrib.auth.models import User as AuthUser
from django.utils import timezone

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)
    last_login = models.DateTimeField(null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    @staticmethod
    def check_password(raw_password, hashed_password):
        return check_password(raw_password, hashed_password)


class Meta:
    app_label = 'base'

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        # Zaszyfrowanie hasła
        password = make_password(validated_data['password'])
        # Utworzenie nowego użytkownika z zaszyfrowanym hasłem
        auth_user = AuthUser.objects.create_user(username=validated_data['email'], email=validated_data['email'], password=password)
        user = User.objects.create(email=validated_data['email'], password=password, last_login=timezone.now())
        return user
    def update(self, instance, validated_data):
        instance.last_login = timezone.now()
        instance.save()
        return instance
    class Meta:
        model = User
        fields = ['id','email', 'password']



class UserBackend:
    def authenticate(self, request, email=None, password=None):
        try:
            user = User.objects.get(email=email)
            if User.check_password(password, user.password):
                return user
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
