# from django.db import models

# # Create your models here.
# from django.db import models
# from django.db.models.signals import post_save
# from django.contrib.auth.models import AbstractUser


# class PoparideUser(AbstractUser):
#     username = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username']


#     def profile(self):
#         profile = Profile.objects.get(user=self)

# class Profile(models.Model):
#     user = models.OneToOneField(PoparideUser, on_delete=models.CASCADE)
#     full_name = models.CharField(max_length=1000)
#     bio = models.CharField(max_length=100)
#     image = models.ImageField(upload_to="user_images", default="default.jpg")
#     verified = models.BooleanField(default=False)


# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

# post_save.connect(create_user_profile, sender=PoparideUser)
# post_save.connect(save_user_profile, sender=PoparideUser)


from django.db import models
from django.conf import settings
from pymongo import MongoClient


# Create your models here.
class Students:
    def __init__(self) -> None:
        pass
    
    @staticmethod
    def student_data():
      # Connect to MongoDB
        client = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
        db = client[settings.MONGO_DB_NAME]
        
        # Access the students collection
        users_collection = db['students']

         # Retrieve all student_name fields
        user_names = users_collection.find({}, {'_id': 0, 'user_name': 1})

        # Extract and return the student names
        names_list = [student['user_name'] for student in user_names]

        # Close the connection
        client.close()

        return names_list
    
def signup():
        client = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
        db = client[settings.MONGO_DB_NAME]
        

          
        # Access the students collection
        users_collection = db['usersdb']

        # prinint

        names = users_collection.find({},{'user_name':1})

        client.close()
        return names

from djongo import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def _str_(self):
        return self.email
