# Generated by Django 4.0.3 on 2022-03-14 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_user_followings_alter_user_likes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='followers',
        ),
        migrations.RemoveField(
            model_name='user',
            name='followings',
        ),
        migrations.RemoveField(
            model_name='user',
            name='likes',
        ),
    ]
