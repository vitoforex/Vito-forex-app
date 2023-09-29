from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate, login, logout
from django.http import JsonResponse, HttpResponse
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        username = data.get('username')
        password = data.get('password')
        # Add other fields as needed
        
        if email and password:
            try:
                user = get_user_model().objects.create_user(
                    email=email,
                    password=password,
                    first_name=first_name,
                    last_name=last_name,
                    username=username,
                    # Add other fields here
                )
                # Optionally, log the user in after registration
                # And return a success message
                return JsonResponse({'message': 'Registration successful'})
            except Exception as e:
                return JsonResponse({'message': 'Registration failed', 'error': str(e)}, status=400)
        else:
            return JsonResponse({'message': 'Missing email or password'}, status=400)


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')


        user = authenticate(request, email=email, password=password)
        print(user)

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful', 'session_id': request.session.session_key})
        else:
            return JsonResponse({'message': 'Login failed'}, status=400)

@csrf_exempt
def logout_user(request):
    logout(request)
    return JsonResponse({"message":"Logged out successfully"})

def get_user_status(request):
    print(request.user)
    if request.user.is_authenticated:
        user_data = {
            'username': request.user.username,
            'email': request.user.email,
            'first_name': request.user.first_name,
            'current_plan':request.user.current_plan,
        }
        return JsonResponse(user_data)
    else:
        return JsonResponse({'authenticated': False})