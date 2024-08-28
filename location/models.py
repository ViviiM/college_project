from django.db import models

class Driver(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)

from djongo import models

class Route(models.Model):
    start_coords = models.JSONField()
    end_coords = models.JSONField()
    stops = models.JSONField()
    driver_details = models.JSONField()
