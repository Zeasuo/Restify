# Generated by Django 4.0.3 on 2022-03-12 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_post_content_post_title_postimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('likes', models.IntegerField()),
                ('comment_num', models.IntegerField()),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post', to='restaurants.restaurant')),
            ],
        ),
        migrations.AlterField(
            model_name='liked',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurants.blog'),
        ),
        migrations.AlterField(
            model_name='postimage',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='avatar', to='restaurants.blog'),
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
