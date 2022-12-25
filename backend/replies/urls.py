from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_replies),  # GET all
    path('new_replies/', views.user_replies),  # POST new replies
    path('post/<int:pk>/', views.user_replies),  # GET for one user
        
]