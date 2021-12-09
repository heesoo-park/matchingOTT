from django.db import models


class Group(models.Model):
    numOfUser = models.IntegerField(default=0, verbose_name='사용자수')
    #groupID = models.CharField(max_length=8, verbose_name='그룹번호') -> 필요없을듯 기본 id 제공되서
    OTTname = models.CharField(max_length=15, verbose_name='OTT이름')
    #isFull = models.BooleanField(null=False, default=False, verbose_name='풀방임?') -> 필요없을듯
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='그룹생성시간')
    user1ID = models.CharField(max_length=50, default="", verbose_name='user1 아이디')
    user2ID = models.CharField(max_length=50, default="", verbose_name='user2 아이디')
    user3ID = models.CharField(max_length=50, default="", verbose_name='user3 아이디')
    user4ID = models.CharField(max_length=50, default="", verbose_name='user4 아이디')
    confirm = models.BooleanField(default=False, verbose_name='그룹확정')