from django.db import models


class Skills(models.Model):
    skill_title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
# Create your models here.
