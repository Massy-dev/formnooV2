from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views
from django.conf.urls import url



urlpatterns = [
    
    path('api/', views.ListCours.as_view(),name="list-cours"),
    #path('list-chap/', views.ListChapitre.as_view(),name="list-chapitre"),
    url(r'^list-chap/(?P<pk>\d+)/$',views.ListChapitre.as_view(),name="list-chapitre"),
    url(r'^list-leçon/$',views.ListLesson.as_view(),name="list-leçon"),
    url(r'^list-content/$',views.ListContent.as_view(),name="list-content"),
    path('liste-matiere/', views.MatiereList.as_view()),
    path('liste-cate/', views.CategorieList.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.LoginApi.as_view()),
    path('register/', views.RegisterApi.as_view()),
    path("create-cours/", views.CreateTodoAPIView.as_view(),name="cours_create"),
    path('<int:pk>/', views.DetailCours.as_view()),
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    
]