# Generated by Django 4.0.3 on 2022-03-13 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0004_rename_postimage_blogimage'),
        ('accounts', '0006_remove_user_followings_user_followings_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='followings',
            field=models.ManyToManyField(blank=True, null=True, related_name='followings', to='restaurants.restaurant'),
        ),
        migrations.AlterField(
            model_name='user',
            name='likes',
            field=models.ManyToManyField(blank=True, null=True, related_name='liked_blogs', to='restaurants.blog'),
        ),
    ]
