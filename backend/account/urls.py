from django.urls import path, include
from . import views
from rest_framework import urls
from django.contrib.auth import views as auth_views
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token
from .views import validate_jwt_token, current_user, ottinfo

urlpatterns =[
    path('signup/', views.UserCreate.as_view()),
    path('profile/', current_user),
    
    path('validate/', validate_jwt_token),

    path('login/', obtain_jwt_token),
    path('ottinfo/', ottinfo),
    path('verify/', verify_jwt_token),
    path('refresh/', refresh_jwt_token),
    
    path('logout/', auth_views.LogoutView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
]