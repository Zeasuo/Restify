# Generated by Django 4.0.3 on 2022-03-06 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_restaurantimage_liked_followed'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='postal_code',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
