from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'discount', 'rating', 'reviews')  # Show these fields in the list view
    search_fields = ('name', 'description')  # Search by name or description
    list_filter = ('discount', 'rating')  # Add filters for discount and rating

admin.site.site_header = "E-commerce Admin"  # Customize admin panel header
admin.site.site_title = "E-commerce Admin Panel"
admin.site.index_title = "Manage Products"


