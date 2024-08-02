# accounts/serializers.py

from rest_framework import serializers
from .models import User  # Adjust import based on your User model location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
