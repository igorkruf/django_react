import json
from django.shortcuts import render
from django.views import View
from django.views.generic.base import ContextMixin
from django.http import JsonResponse, HttpResponse
# #####################################################
from .serializers import ArticleSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Article
# ######################################################
# Create your views here.


class MainPage(View,ContextMixin):
    '''
    Главная страница main_app
    '''

    def get_context_data(self, req, **kwargs):
        context=super().get_context_data(**kwargs)
        return context
    
    def get(self, req, *args, **kwargs):
        context=self.get_context_data(req, **kwargs)
        return render(req, 'react_app/index.html', context)
    
class GetListArticle(APIView):
    '''
    Получаем JSON всех статей 
    '''    

    def get(self, req):
        print('пришёл запрос от клиента...')
        list_article = Article.objects.all()
        serializer = ArticleSerializer(list_article, many=True)
        return Response(serializer.data)
    

class AddArticle(APIView):
    '''
    Получаем JSON всех статей 
    '''    

    def post(self, req):
        # data = json.loads(req.data)
        data =req.data
        print(data)
        serializer = ArticleSerializer(data = data)
               
        if serializer.is_valid():
            serializer.save()
            return Response({'post': serializer.data, 'status': True})     
        else:
            print('хуй!!!') 
   
        return Response({'post': serializer.data, 'status': False })    
    

class EditArticle(APIView):
    '''
    Изменяем статью
    '''

    def get(self, req, *args, **kwargs):
        print('Изменяем статью id: ', kwargs)
        article = Article.objects.get(id=kwargs.get("article_id", None))
        serializer = ArticleSerializer(instance=article)
        return Response(serializer.data)
    
    def put(self, req, *args, **kwargs):
        print('PUT Изменяем статью id: ', kwargs.get("article_id", None))
        print(req.data)
        article = Article.objects.get(id=kwargs.get("article_id", None))
        serializer = ArticleSerializer(data=req.data, instance=article)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"post":serializer.data, "status": True})


class DelArticle(APIView):
    '''
    Удаляем статью
    '''

    def delete(self, request, *args, **kwargs):
        print('удаляем статью')
        pk = kwargs.get("article_id", None)
        if not pk:
            return Response({"error": "Method DELETE not allowed"})
        article=Article.objects.get(id=pk)
        article.delete()
        return Response({"post": "delete post " + str(pk)})