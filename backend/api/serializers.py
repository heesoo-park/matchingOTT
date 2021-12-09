from rest_framework import serializers
from .models import Group
from account.models import User
from account.serializers import UserSerializer


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'numOfUser', 'groupID', 'OTTname', 'isFull', 'created_at', 'user1code', 'user2code', 'user3code','user4code')

# class SelectOTTSerializer(serializers.Serializer):
#     class Meta:
#         model = User
#         fields = ['userID', 'OTTname']

# class SelectOTTSerializer(serializers.Serializer):
#     user = UserSerializer
#     ottname = serializers.CharField(max_length=100)

class SelectOTTSerializer(serializers.Serializer):
    userID = serializers.CharField(max_length=100)
    OTTname = serializers.CharField(max_length=100)
    
    def create(self, validated_data):
        return User.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.OTTname = validated_data['OTTname', instance.OTTname]
        instance.save()
        return instance