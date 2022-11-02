from django.urls import path
from . import views

urlpatterns = [
    path('',views.replies_list),
    path('<int:pk>/',views.replies_detail),
]