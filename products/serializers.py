

from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [  
            'id', 'name', 'description', 'rating', 'reviews',  
            'price', 'original_price', 'discount',  
            'delivery_date', 'fastest_delivery', 'image'  
        ]  # ✅ List of fields (Correct format)

