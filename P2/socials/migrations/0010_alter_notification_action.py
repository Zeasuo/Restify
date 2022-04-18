# Generated by Django 4.0.3 on 2022-04-17 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socials', '0009_alter_notification_target_alter_notification_action'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='action',
            field=models.CharField(choices=[(1, 'Liked'), (2, 'Followed'), (3, 'Commented'), (4, 'Updated'), (5, 'Made')], max_length=10),
        ),
    ]