# Generated by Django 5.0.6 on 2024-11-02 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_remove_appelloesame_unique_migration_appelloesame'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appelloesame',
            name='data',
            field=models.CharField(max_length=19),
        ),
    ]