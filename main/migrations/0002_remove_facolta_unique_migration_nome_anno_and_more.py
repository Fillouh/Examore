# Generated by Django 5.0.6 on 2024-10-22 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='facolta',
            name='unique_migration_nome_anno',
        ),
        migrations.RenameField(
            model_name='facolta',
            old_name='anno',
            new_name='durata',
        ),
        migrations.AddConstraint(
            model_name='facolta',
            constraint=models.UniqueConstraint(fields=('nome', 'durata'), name='unique_migration_nome_anno'),
        ),
    ]
