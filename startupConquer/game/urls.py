from django.urls import path
from . import views

urlpatterns = [
    path('game/', views.game, name="game"),
    path('', views.home, name="home")
]