from rest_framework import serializers
from .models import Reply


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'comment', 'text']
