# Generated by Django 4.1.13 on 2024-08-15 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dboperations', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoginUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=128)),
            ],
        ),
    ]
