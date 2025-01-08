from django.urls import path, include
from . import views as main_app_views

app_name = "main_app"

urlpatterns = [
    path('', main_app_views.MainPage.as_view(), name='main_page'),
    path('api/add_article/', main_app_views.AddArticle.as_view()),
    path('api/', main_app_views.GetListArticle.as_view()),
    path('api/article/edit/<int:article_id>/', main_app_views.EditArticle.as_view()),
    path('api/article/del/<int:article_id>/', main_app_views.DelArticle.as_view()),
   
   
   
]


