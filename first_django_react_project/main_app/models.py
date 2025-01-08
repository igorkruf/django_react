from django.db import models
from django.contrib.auth.models import User 

# Create your models here.

class Article(models.Model):
    '''
    Статьи
    '''

    title = models.CharField(max_length=255)
    content=models.TextField()
    # author=models.ForeignKey(User, related_name='Articles', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи"