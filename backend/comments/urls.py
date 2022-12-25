from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_comments), #GET all
    path('new_comment/', views.user_comments), #POST new comment
    path('post/<int:pk>/', views.user_comments), #GET for one user
    
    
]