from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.


class Reply(models.Model):
   comment = models.ForeignKey(User, on_delete=models.CASCADE) // FK
   text = models.CharField(max_length=100)
