# accounts/serializers.py

from rest_framework import serializers
from .models import User,Product, ProductImage   # Adjust import based on your User model location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']

class ProductSerializer(serializers.ModelSerializer):
    image = ProductImageSerializer(read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image']


class ProductCreateSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(write_only=True)

    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'image']

    def create(self, validated_data):
        image = validated_data.pop('image')
        product = Product.objects.create(**validated_data)
        ProductImage.objects.create(product=product, image=image)
        return product