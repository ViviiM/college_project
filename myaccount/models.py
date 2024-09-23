from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager,PermissionsMixin
from django.contrib.auth.models import Group, Permission

class NewUserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Email Address is Required to Register.")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    # def create_superuser(self, email, name, password=None):
    #     user = self.create_user(
    #         email,
    #         password=password,
    #         name=name
    #     )
    #     user.is_admin = True
    #     user.is_superuser = True 
    #     user.save(using=self._db)
    #     return user

class NewUserManagement(AbstractBaseUser,PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(verbose_name="email", max_length=255, unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    REQUIRED_FIELDS = ['email']
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    objects = NewUserManager()

    groups = models.ManyToManyField(
        Group,
        related_name='custom_accounts_user_groups',  # Make related_name unique
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_accounts_user_permissions',  # Make related_name unique
        blank=True
    )

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin