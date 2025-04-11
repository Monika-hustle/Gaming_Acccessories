from django.contrib import admin
from .models import CartItem  # Import CartItem from models.py

@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'quantity', 'user')  # Adjust as per your model fields
