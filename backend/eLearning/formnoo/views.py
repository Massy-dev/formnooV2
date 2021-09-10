# todos/views.py
import random
import string
from django.contrib.auth import authenticate, login
from knox.models import AuthToken
from rest_framework import generics, status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


class LoginApi(generics.GenericAPIView):
    """ test API view """
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
   

    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data) 
        serializer.is_valid(raise_exception=True)
        #user = serializer.validated_data
        #print("=============",request.data.get("password"))
        password=request.data.get("password")
        username=request.data.get("username")
        
        user = authenticate(username=username, password=password)
        
        try:
            token = Token.objects.get(user_id=user.id)
            if user:
                login(request, user)
                print("bien logger")
            else:
                print("pas bon")
            

        except Token.DoesNotExist:
            token = Token.objects.create(user=user)
        
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })


class RegisterApi(generics.GenericAPIView):
    """ test API view """
    serializer_class = RegisterSerializer
    queryset = Utilisateur.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        token = Token.objects.create(user=user)

        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":token.key
        })

        
class UserList(generics.ListAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilSerializer
    permission_classes = (IsAuthenticated,)
    
        
   

class MatiereList(generics.ListAPIView):
   # authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny]
    queryset = Matiere.objects.all()
    serializer_class = MatiereSerializer

class CategorieList(generics.ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny]
    queryset = Categorie.objects.all()
    serializer_class = CategSerializer   

class CreateTodoAPIView(APIView):
    """This endpoint allows for creation of a todo"""
    queryset = ObjetPeda.objects.all()
    serializer_class = CoursSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs): 
        source = string.ascii_letters + string.digits
        result_str = ''.join((random.choice(source) for i in range(8)))
        serializer = CoursSerializer(data=request.data)
        idt=request.data["identifiant"]=result_str
        users=request.data["createur"]=self.request.user.id
      
        if serializer.is_valid():
            serializer.save()

        print("error", idt,"====",users)
        return Response(serializer.data)
        
        
     
        
    
class ListCours(generics.ListCreateAPIView):
    
    queryset = ObjetPeda.objects.all()
    serializer_class = CoursSerializer
    permission_classes = (IsAuthenticated,)


class ListChapitre(APIView):
    serializer_class = ChapSerializer
    queryset = Chapitre.objects.all()
    permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Chapitre.objects.filter(objetPeda=pk)
            
        except Chapitre.DoesNotExist:
            print("nothing")
    
    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.serializer_class(snippet, many=True)
        return Response(serializer.data)

class ListLesson(generics.ListCreateAPIView):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()
    permission_classes = (IsAuthenticated,)
    #def get_object(self, pk):
        #try:
            #return Lesson.objects.filter(chapitre=pk)
            
        #except Lesson.DoesNotExist:
            #print("nothing")
    
    #def get(self, request, pk, format=None):
        #snippet = self.get_object(pk)
        #serializer = self.serializer_class(snippet, many=True)
        #return Response(serializer.data)

class ListContent(generics.ListCreateAPIView):
    serializer_class = ContentSerializer
    queryset = Contenu.objects.all()
    permission_classes = (IsAuthenticated,)


class DetailCours(generics.RetrieveUpdateDestroyAPIView):
    queryset = ObjetPeda.objects.all()
    serializer_class = CoursSerializer

class HelloView(APIView):
             

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
