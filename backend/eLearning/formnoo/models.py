from django.db import models
from django.contrib.auth.models import AbstractUser

class Utilisateur(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    adresse = models.CharField(max_length=30, blank=True)
    naissance = models.DateField(null=True, blank=True)



class Cours(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title