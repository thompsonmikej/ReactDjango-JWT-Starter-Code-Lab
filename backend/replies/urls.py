from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_all_replies),
    path('<int:pk>/',views.user_replies),
]