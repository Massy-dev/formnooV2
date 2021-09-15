from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import  timezone

class Niveau(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.titre
    
class Categorie(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()
    

    def __str__(self):
        """A string representation of the model."""
        return self.titre

class Matiere(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()
    niveau= models.ForeignKey(Niveau, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )

    def __str__(self):
        """A string representation of the model."""
        return self.titre


class Utilisateur(AbstractUser):
    nom = models.CharField(max_length=30, blank=True)
    prenom = models.CharField(max_length=50, blank=True)
    types = models.CharField(max_length=30, blank=True)
    naissance = models.DateField(null=True, blank=True)



class ObjetPeda(models.Model):
    createur= models.ForeignKey(Utilisateur, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    matiere= models.ForeignKey(Matiere, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    categorie= models.ForeignKey(Categorie, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    titre = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='photos/')
    date_creation = models.DateTimeField(blank=True, default=timezone.now)
    identifiant = models.CharField(max_length=50, blank=True)

    def __str__(self):
        """A string representation of the model."""
        return self.titre


class Chapitre(models.Model):
    objetPeda= models.ForeignKey(ObjetPeda, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    titre = models.CharField(max_length=200)
    description = models.TextField()
    identifiant = models.CharField(max_length=50, blank=True)
    date_creation = models.DateTimeField(blank=True, default=timezone.now)

    def __str__(self):
        """A string representation of the model."""
        return self.titre

class Lesson(models.Model):
    chapitre= models.ForeignKey(Chapitre, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    titre = models.CharField(max_length=200)
    description = models.TextField()
    identifiant = models.CharField(max_length=50, blank=True)
    date_creation = models.DateTimeField(blank=True, default=timezone.now)

    def __str__(self):
        """A string representation of the model."""
        return self.titre

class TypeContenu(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()
    date_creation = models.DateTimeField(blank=True, default=timezone.now)

    def __str__(self):
        """A string representation of the model."""
        return self.titre
        
class Contenu(models.Model):
    lesson= models.ForeignKey(Lesson, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    typeC= models.ForeignKey(TypeContenu, blank=True, null=True, on_delete=models.CASCADE,related_name='+', )
    titre = models.CharField(max_length=200)
    description = models.TextField()
    identifiant = models.CharField(max_length=50, blank=True)
    date_creation = models.DateTimeField(blank=True, default=timezone.now)

    def __str__(self):
        """A string representation of the model."""
        return self.titre