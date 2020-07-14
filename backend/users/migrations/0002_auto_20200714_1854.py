# Generated by Django 2.2.14 on 2020-07-14 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="first_name",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="last_name",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
