from django.shortcuts import render
from rest_framework.response import Response
from .serializers import UserSerializer, UserSerializerWithToken
from .models import User
from rest_framework import generics, status, permissions
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework.views import APIView
from django.http import JsonResponse

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


# 회원가입
class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    queryset = User.objects.all()
    serializer_class = UserSerializerWithToken
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class ProfileUpdateAPI(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = ProfileSerializerWithToken

def ottinfo(request):
    myid = request.GET.get('userID')
    myprofile = User.objects.get(userID=myid)
    myott = myprofile.OTTname
    
    dic = {}
    
    dic['OTTname'] = myott
    
    return JsonResponse(dic, safe=False)

@api_view(['GET'])
def validate_jwt_token(request):
    try:
        token = request.META['HTTP_AUTHORIZATION']
        data = {'token': token.split()[1]}
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
    except Exception as e:
        return Response(e)

    return Response(status=status.HTTP_200_OK)