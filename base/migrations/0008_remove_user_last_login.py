# Generated by Django 4.2.1 on 2023-06-11 00:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_user_last_login'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_login',
        ),
    ]