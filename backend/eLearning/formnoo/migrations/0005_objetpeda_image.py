# Generated by Django 3.2.6 on 2021-09-14 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formnoo', '0004_chapitre_contenu_lesson_typecontenu'),
    ]

    operations = [
        migrations.AddField(
            model_name='objetpeda',
            name='image',
            field=models.ImageField(default='null', upload_to='photos/'),
            preserve_default=False,
        ),
    ]