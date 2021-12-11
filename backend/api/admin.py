from django.contrib import admin
from .models import Group

class GroupAdmin(admin.ModelAdmin):
        list_display = ('id','numOfUser', 'confirm')
        fieldsets = (
                (None, {
                        'fields': (
                                'id',
                                'numOfUser',
                                'confirm',
                        )
                }),
        )


admin.site.register(Group, GroupAdmin)

# Register your models here.
