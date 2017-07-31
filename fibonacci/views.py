from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .helpers import fibonacci_sequence


@api_view(['GET'])
def fibonacci(request):
    return Response(fibonacci_sequence(request.GET['fZero'], request.GET['fOne']))


def home(request):
    return render(request, 'fibonacci/home.html')
