# Generated by Django 4.0.3 on 2022-03-15 18:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socials', '0003_remove_notification_blogtarget_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Notification',
        ),
    ]
