from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .helpers import fibonacci_sequence


@api_view(['GET'])
def fibonacci(request):
    return Response(fibonacci_sequence(int(request.GET['fZero']), int(request.GET['fOne']), int(request.GET['length'])))


def home(request):
    return render(request, 'fibonacci/home.html')
