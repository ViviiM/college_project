
from django.contrib import admin
from . import models
# Register your models here.

class UserManagementAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'is_active', 'is_admin' )
    search_fields = ('email', 'name')
    list_filter = ('is_active', 'is_admin')

admin.site.register(models.NewUserManagement, UserManagementAdmin)