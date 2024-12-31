from django.urls import path
from . import views

urlpatterns = [
    path('game/', views.game, name="game"),
    path('about/', views.about, name="about"),
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('leaderboard/', views.leaderboard, name="leaderboard"),
    path('', views.home, name="home")
]