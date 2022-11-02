from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.


class Comments(models.Model):
    video_id = models.ForeignKey(max_length=255) // FK
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
