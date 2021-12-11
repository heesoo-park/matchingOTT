from django.contrib import admin
from .models import Group

class GroupAdmin(admin.ModelAdmin):
        list_display = ('id', 'numOfUser', 'OTTname', 'confirm', 'created_at')
        fieldsets = (
                (None, {
                        'fields': (

                                'user1ID',
                                'user2ID',
                                'user3ID',
                                'user4ID',
                                'numOfUser',
                                'confirm',
                        )
                }),
        )


admin.site.register(Group, GroupAdmin)

# Register your models here.