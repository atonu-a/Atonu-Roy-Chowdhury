from django.shortcuts import render
from .models import *

def home(request):    
    skills =  Skills.objects.all().order_by('id')
    projects =  Projects.objects.all().order_by('-id')[:3]
    data = {
        "skills":skills,
        "projects":projects,
    }
    
    return render(request,"base.html", data)

def projects(request):
    
    category = Category.objects.all().order_by('id')
    projects =  Projects.objects.all().order_by('-id')
    skills = Skills.objects.all().order_by("-id")
    data = {
        "category": category,
        "projects":projects,
        "skills":skills,
    }
    return render(request, "projects.html", data)



        
    
# Create your views here.
