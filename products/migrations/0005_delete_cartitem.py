# Generated by Django 5.1.7 on 2025-04-11 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_cartitem'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CartItem',
        ),
    ]
