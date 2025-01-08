from django.shortcuts import render
from .forms import ContactForm

# Create your views here.
def indiaMap(request):
    return render(request, 'indiaMap.html')

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

def levelSelection(request):
    return render(request, 'levelSelection.html')

def spinthewheel(request):
    return render(request, 'spinDwheel.html')

def contact_view(request):
    form = ContactForm()
    return render(request, 'contact.html', {'form': form})
