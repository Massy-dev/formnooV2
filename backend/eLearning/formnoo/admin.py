from django.contrib import admin

from .models import *

admin.site.register(ObjetPeda)
admin.site.register(Categorie)
admin.site.register(Niveau)
admin.site.register(Matiere)
admin.site.register(Utilisateur)

admin.site.register(Chapitre)
admin.site.register(Lesson)
admin.site.register(Contenu)
admin.site.register(TypeContenu)