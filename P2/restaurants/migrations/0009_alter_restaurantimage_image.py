# Generated by Django 4.0.3 on 2022-03-15 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0008_remove_restaurant_follower_num'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurantimage',
            name='image',
            field=models.ImageField(upload_to='restaurant_avatar'),
        ),
    ]