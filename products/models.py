from django.db import models
from django.contrib.auth.models import User  # Or your custom user model if used

# Your existing Product model
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    reviews = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.IntegerField()
    delivery_date = models.CharField(max_length=50)
    fastest_delivery = models.CharField(max_length=50)
    image = models.URLField()

    def __str__(self):
        return self.name  # use __str__ (double underscores)

