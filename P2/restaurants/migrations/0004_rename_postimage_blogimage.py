# Generated by Django 4.0.3 on 2022-03-12 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0003_blog_alter_liked_post_alter_postimage_post_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PostImage',
            new_name='BlogImage',
        ),
    ]