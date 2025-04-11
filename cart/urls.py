# cart/urls.py

from django.urls import path
from .views import AddToCartView, CartView

urlpatterns = [
    path('cart/', CartView.as_view(), name='cart-view'),
    path('cart/add/', AddToCartView.as_view(), name='cart-add'),
]
