from django.db import models
from autoslug import AutoSlugField
from django.utils.text import slugify
from typing import Iterable


class Skills(models.Model):
    skill_title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    def __str__(self):
        return self.skill_title

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from = "name", unique=True, max_length=255)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
 
            self.slug = f"{base_slug}"
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name
   
class Projects(models.Model):
    
    # I have to add a project category section here
    category = models.ForeignKey(Category, related_name="project", on_delete=models.CASCADE)
    image= models.ImageField(upload_to='images/')
    image_bg = models.CharField(max_length=100)
    project_title = models.CharField(max_length=255)
    working_date = models.CharField(max_length=100)
    desc = models.TextField()
    link = models.TextField()
    github = models.TextField(blank=True)
    skills = models.ManyToManyField(Skills, related_name="projects")
    
    def __str__(self):
        return self.project_title
    
# Create your models here.
