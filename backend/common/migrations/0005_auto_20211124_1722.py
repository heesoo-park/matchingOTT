# Generated by Django 3.1.4 on 2021-11-24 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0004_auto_20211124_1709'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phoneNum',
            field=models.CharField(default='휴대폰 번호를 입력해주세요.', max_length=11, verbose_name='휴대폰 번호'),
        ),
        migrations.AlterField(
            model_name='user',
            name='isAttend',
            field=models.BooleanField(default=False, verbose_name='그룹 참여 상태'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_Login',
            field=models.BooleanField(default=False, verbose_name='로그인 상태'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False, verbose_name='관리자 권한'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_laftel',
            field=models.BooleanField(default=False, verbose_name='라프텔'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_netflix',
            field=models.BooleanField(default=False, verbose_name='넷플릭스'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_tving',
            field=models.BooleanField(default=False, verbose_name='티빙'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_watcha',
            field=models.BooleanField(default=False, verbose_name='왓챠'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_wavve',
            field=models.BooleanField(default=False, verbose_name='웨이브'),
        ),
    ]
