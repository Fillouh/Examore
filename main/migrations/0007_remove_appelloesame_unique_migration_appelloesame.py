# Generated by Django 5.0.6 on 2024-11-02 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_esame_crediti'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='appelloesame',
            name='unique_migration_AppelloEsame',
        ),
    ]