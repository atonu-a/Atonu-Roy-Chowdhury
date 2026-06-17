from django.db import models


class Skills(models.Model):
    skill_title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    
class Projects(models.Model):
    image= models.ImageField(upload_to='images/')
    image_bg = models.CharField(max_length=10)
    project_title = models.CharField(max_length=255)
    working_date = models.CharField(max_length=100)
    desc = models.TextField()
    link = models.TextField()
# Create your models here.
