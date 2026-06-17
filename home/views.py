from django.shortcuts import render
from .models import *

def home(request):    
    skills =  Skills.objects.all().order_by('id')
    projects =  Projects.objects.all().order_by('-id')
    data = {
        "skills":skills,
        "projects":projects,
    }
    
    return render(request,"base.html", data)



        
    
# Create your views here.
