# Generated by Django 4.0.3 on 2022-03-15 16:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurants', '0008_remove_restaurant_follower_num'),
        ('socials', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(choices=[('like', 'Liked'), ('follow', 'Followed'), ('comment', 'Commented')], max_length=10)),
                ('BlogTarget', models.ForeignKey(default='NOT APPLICABLE', on_delete=django.db.models.deletion.CASCADE, related_name='blogtarget', to='socials.blog')),
                ('RestaurantTarget', models.ForeignKey(default='NOT APPLICABLE', on_delete=django.db.models.deletion.CASCADE, related_name='restauranttarget', to='restaurants.restaurant')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notification', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
