# Generated by Django 4.0.3 on 2022-03-16 02:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0009_alter_restaurantimage_image'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='food',
            unique_together={('food_name', 'restaurant')},
        ),
    ]