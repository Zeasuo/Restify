# Generated by Django 4.0.3 on 2022-03-09 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0006_alter_restaurant_restaurant_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='phone_number',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
