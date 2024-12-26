from django.shortcuts import render

# Create your views here.
def game(request):
    return render(request, 'map.html')

def home(request):
    return render(request, 'home.html')