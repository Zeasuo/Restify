# Generated by Django 4.0.3 on 2022-03-15 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socials', '0002_notification'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notification',
            name='BlogTarget',
        ),
        migrations.RemoveField(
            model_name='notification',
            name='RestaurantTarget',
        ),
    ]
