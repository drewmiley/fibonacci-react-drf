from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render


@api_view(['GET'])
def fibonacci(request):
    return Response([1, 2])


def home(request):
    return render(request, 'fibonacci/home.html')
