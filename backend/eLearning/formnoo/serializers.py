from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
#User = get_user_model()


class CoursSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'matiere',
            'categorie',
            'titre',
            'description',
            'identifiant',
            'createur',
            'image',
            'date_creation'
            
        )
        model = ObjetPeda
    
class MatiereSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'titre',
            'description',
        )
        model = Matiere

class CategSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'titre',
            'description',
        )
        model = Matiere

class UserSerializer(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        
        user = authenticate(**data)
        if user and user.is_active:
            #login(request, user)
            return user
        raise serializers.ValidationError("invalide")

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user


class UtilSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'username',
            'email',
            
            
        )
        model = Utilisateur

class ChapSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Chapitre
        fields = (
            'id',
            'objetPeda',
            'titre',
            'identifiant',
            'description',
            
            
        )
    
class LessonSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Lesson
        fields = (
            'id',
            'chapitre',
            'titre',
            'description',
            
            
        )

    
class ContentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contenu
        fields = (
            'id',
            'lesson',
            'titre',
            'description',
            
            
        )
        