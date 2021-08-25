from rest_framework import serializers
from .models import Cours


class CoursSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Cours