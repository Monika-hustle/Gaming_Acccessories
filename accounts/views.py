from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate

class SignupView(APIView):
    def post(self, request):
        try:
            data = request.data

            required_fields = ['username', 'email', 'password']
            for field in required_fields:
                if field not in data:
                    return Response({'error': f'Missing field: {field}'}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=data['username']).exists():
                return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(email=data['email']).exists():
                return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create(
                username=data['username'],
                email=data['email'],
                password=make_password(data['password'])
            )

            token, _ = Token.objects.get_or_create(user=user)

            return Response({
                'message': 'User created successfully',
                'token': token.key
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            print("Signup error:", str(e))
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'username': user.username})
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
