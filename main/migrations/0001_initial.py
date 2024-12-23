# Generated by Django 5.0.6 on 2024-10-12 16:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppelloEsame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Aula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.IntegerField(choices=[(1, 'FA-2F'), (2, 'Fa-2g'), (3, 'FA-2E')])),
                ('data', models.DateTimeField()),
                ('span_disponibilita', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Esame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('anno', models.IntegerField(choices=[(1, 'Primo Anno'), (2, 'Secondo Anno'), (3, 'Terzo Anno')])),
                ('semestre', models.IntegerField(choices=[(1, '1° Semestre'), (2, '2° Semestre'), (3, 'Ciclo Annuale Unico')])),
                ('crediti', models.IntegerField(choices=[(0, '0'), (1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10'), (11, '11'), (12, '12'), (13, '13'), (14, '14'), (15, '15'), (16, '16'), (17, '17'), (18, '18'), (19, '19'), (20, '20'), (21, '21'), (22, '22'), (23, '23'), (24, '24')])),
            ],
        ),
        migrations.CreateModel(
            name='Facolta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('anno', models.IntegerField(choices=[(1, 'Primo Anno'), (2, 'Secondo Anno'), (3, 'Terzo Anno')])),
            ],
        ),
        migrations.AddConstraint(
            model_name='aula',
            constraint=models.UniqueConstraint(fields=('data', 'nome', 'span_disponibilita'), name='unique_migration_Aula'),
        ),
        migrations.AddField(
            model_name='appelloesame',
            name='esame',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.esame'),
        ),
        migrations.AddConstraint(
            model_name='facolta',
            constraint=models.UniqueConstraint(fields=('nome', 'anno'), name='unique_migration_nome_anno'),
        ),
        migrations.AddField(
            model_name='esame',
            name='facolta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.facolta'),
        ),
        migrations.AddConstraint(
            model_name='appelloesame',
            constraint=models.UniqueConstraint(fields=('data', 'esame'), name='unique_migration_AppelloEsame'),
        ),
        migrations.AddConstraint(
            model_name='esame',
            constraint=models.UniqueConstraint(fields=('nome', 'anno', 'semestre', 'facolta'), name='unique_migration_Esame'),
        ),
    ]
