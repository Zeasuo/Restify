# Generated by Django 4.0.3 on 2022-04-17 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socials', '0010_alter_notification_action'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='action',
            field=models.CharField(choices=[('like', 'Liked'), ('follow', 'Followed'), ('comment', 'Commented'), ('update', 'Updated'), ('make', 'Made')], max_length=10),
        ),
    ]