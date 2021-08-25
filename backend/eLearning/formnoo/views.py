# todos/views.py
from rest_framework import generics

from .models import Cours
from .serializers import CoursSerializer


class ListCours(generics.ListCreateAPIView):
    queryset = Cours.objects.all()
    serializer_class = CoursSerializer


class DetailCours(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cours.objects.all()
    serializer_class = CoursSerializer