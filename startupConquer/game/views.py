from django.shortcuts import render

# Create your views here.
def game(request):
    return render(request, 'map.html')

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def leaderboard(request):
    return render(request, 'leaderboard.html')