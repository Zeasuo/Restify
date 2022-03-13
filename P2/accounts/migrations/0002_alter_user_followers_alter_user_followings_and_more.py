# Generated by Django 4.0.3 on 2022-03-04 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='followers',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='followings',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='like',
            field=models.IntegerField(default=0),
        ),
    ]