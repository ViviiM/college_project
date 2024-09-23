
# from django.db import models
# from django.conf import settings
# from pymongo import MongoClient
# from djongo import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager,PermissionsMixin

# class UserManager(BaseUserManager):
#     def create_user(self, email, first_name, last_name, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')
#         user = self.model(
#             email=self.normalize_email(email),
#             first_name=first_name,
#             last_name=last_name,
#         )
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

# class User(AbstractBaseUser):
#     first_name = models.CharField(max_length=30)
#     last_name = models.CharField(max_length=30)

#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=128)
#     objects = UserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name']

#     def _str_(self):
#         return self.email
    

# from django.db import models

# class LoginUser(models.Model):
#     exemail = models.EmailField(unique=True)
#     expassword = models.CharField(max_length=50, default='admin')
    
#     def __str__(self):
#         return self.email
    


from djongo import models as DjongoModels

class Driver(DjongoModels.Model):
    Drivername = DjongoModels.CharField(max_length=100, null=True,blank = True)
    DriverEmail = DjongoModels.CharField(max_length=100, null=True,blank=True)#Allow DriverEmail to be Nullable: If it’s acceptable for the DriverEmail to be null for some rows, you can make the field nullable by setting null=True. This way, existing rows will have null in this field instead of requiring a default value.
    Price = DjongoModels.IntegerField( null=True,blank=True)
    origin = DjongoModels.CharField(max_length=255)
    destinations = DjongoModels.CharField(max_length=255)
    stops = DjongoModels.JSONField()
    radio_choice = DjongoModels.IntegerField(choices=[(1, 'Option 1'), (2, 'Option 2'), (3, 'Option 3')])
    is_checked = DjongoModels.BooleanField(default=False)
    
    def __str__(self):
        return self.Drivername
