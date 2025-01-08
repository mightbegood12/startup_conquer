from django.urls import path
from . import views

urlpatterns = [
    path('game/indiaMap/', views.indiaMap, name="indiaMap"),
    path('about/', views.about, name="about"),
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('levelselection/', views.levelSelection, name="levelselection"),
    path('spinthewheel/', views.spinthewheel, name="spinthewheel"),
    path('leaderboard/', views.leaderboard, name="leaderboard"),
    path('contact/', views.contact_view, name="contact"),
    path('', views.home, name="home"),
]

