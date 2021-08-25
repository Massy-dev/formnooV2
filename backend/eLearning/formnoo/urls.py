from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListCours.as_view()),
    path('<int:pk>/', views.DetailCours.as_view()),
]