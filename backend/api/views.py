from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, permissions, status
from rest_framework.exceptions import server_error
from .serializers import GroupSerializer, SelectOTTSerializer, GroupMemberSerializer
from .models import Group
from account.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework.decorators import api_view
from account.views import current_user
from account.serializers import UserSerializer, UserSerializerWithToken
from django.http import JsonResponse


@api_view(['GET'])
def validate_jwt_token(request):
    try:
        token = request.META['HTTP_AUTHORIZATION']
        data = {'token': token.split()[1]}
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
    except Exception as e:
        return Response(e)

    return Response(status=status.HTTP_200_OK)

# Create your views here.
class GroupView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class DetailGroupView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

def index(request):
    if request.method == 'GET':
        myid = request.GET['userID']

        myprofile = User.objects.get(userID=myid)
        mygroupid = myprofile.groupID

        mygroup = Group.objects.get(id=mygroupid)
        users = []
        users.append(mygroup.user1ID)
        users.append(mygroup.user2ID)
        users.append(mygroup.user3ID)
        users.append(mygroup.user4ID)
        give = {}
        give['user1ID'] = users[0]
        give['user2ID'] = users[1]
        give['user3ID'] = users[2]
        give['user4ID'] = users[3]
        serializer = GroupMemberSerializer(give, many=True)
        return JsonResponse(give, safe=False)
    elif request.method == 'POST':
        myid = request.post['userID']
        print("내아이디:",myid)
        myprofile = User.objects.get(userID=myid)
        print("내프로필",myprofile)
        mygroupid = myprofile.groupID
        print("내그룹아디",mygroupid)
        mygroup = Group.objects.get(id=mygroupid)
        print("내그룹",mygroup)
        if mygroup.user1ID == myid:
            mygroup.user1ID = ""
            mygroup.numOfUser -= 1
        elif mygroup.user2ID == myid:
            mygroup.user2ID = ""
            mygroup.numOfUser -= 1
        elif mygroup.user3ID == myid:
            mygroup.user3ID = ""
            mygroup.numOfUser -= 1
        elif mygroup.user4ID == myid:
            mygroup.user4ID = ""
            mygroup.numOfUser -= 1

        myprofile.groupID = "아직 그룹에 참가하지 않았습니다."
        myprofile.OTTname = "아직 OTT를 선택하지 않았습니다."
        myprofile.save()
        mygroup.save()
        return Response(status=status.HTTP_201_CREATED)

def getGroup(request):
    myid = request.GET.get('userID')

    myprofile = User.objects.get(userID=myid)
    mygroupid = myprofile.groupID
    
    mygroup = Group.objects.get(id=mygroupid)
    users = []
    users.append(mygroup.user1ID)
    users.append(mygroup.user2ID)
    users.append(mygroup.user3ID)
    users.append(mygroup.user4ID)
    give = {}
    give['user1ID'] = users[0]
    give['user2ID'] = users[1]
    give['user3ID'] = users[2]
    give['user4ID'] = users[3]
    serializer = GroupMemberSerializer(give, many=True)
    return JsonResponse(give, safe=False)

def groupOut(request):
    print(request.GET)
    myid = request.GET.get('userID')
    print("내아이디:",myid)
    myprofile = User.objects.get(userID=myid)
    print("내프로필",myprofile)
    mygroupid = myprofile.groupID
    print("내그룹아디",mygroupid)
    mygroup = Group.objects.get(id=mygroupid)
    print("내그룹",mygroup)
    if mygroup.user1ID == myid:
        mygroup.user1ID = ""
        mygroup.numOfUser -= 1
    elif mygroup.user2ID == myid:
        mygroup.user2ID = ""
        mygroup.numOfUser -= 1
    elif mygroup.user3ID == myid:
        mygroup.user3ID = ""
        mygroup.numOfUser -= 1
    elif mygroup.user4ID == myid:
        mygroup.user4ID = ""
        mygroup.numOfUser -= 1
    
    dic = {}
    dic['1'] = 1
    
    myprofile.groupID = "아직 그룹에 참가하지 않았습니다."
    myprofile.OTTname = "아직 OTT를 선택하지 않았습니다."
    myprofile.save()
    mygroup.save()
    return JsonResponse(dic, safe=False)


class selectOTT(APIView):
    permission_classes = (permissions.AllowAny,) # 쓸모있는친구네
    queryset = User.objects.all()
    serializer_class = SelectOTTSerializer

    def post(self, request, format=None):
        
        serializer = SelectOTTSerializer(data=request.data)
        
        if serializer.is_valid():
            myuserid = serializer.data['userID']
            ottname = serializer.data['OTTname']
            
            groupid = 0
            
            # id로 유저조회
            myprofile = User.objects.get(userID=myuserid)
            # 1~30 (넷플릭스)
            if ottname == "NETFLIX":
                for i in range(1,31):
                    mygroupid = i
                    
                    # 해당 그룹 불러오기
                    mygroup = Group.objects.get(id=mygroupid) 
                    # 그룹원이 다 안차있으면
                    if mygroup.numOfUser < 4:
                        # user1자리 비어있으면
                        if mygroup.user1ID == "":
                            # user1id에 넣고 numofuser 1올리고 
                            mygroup.user1ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user2 비어있으면
                        elif mygroup.user2ID == "":
                            # user2id에 넣고 numofuser 1올리고 
                            mygroup.user2ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user3 비어있으면
                        elif mygroup.user3ID == "":
                            # user3id에 넣고 numofuser 1올리고 
                            mygroup.user3ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user4 비어있으면
                        else:
                            # user4id에 넣고 numofuser 1올리고 
                            mygroup.user4ID = myuserid
                            mygroup.numOfUser += 1
                        
                        # 그룹 수정 후 유저 groupid ottname 수정
                        myprofile.groupID = mygroupid
                        myprofile.OTTname = ottname
                        # 수정한거 저장
                        mygroup.save()
                        myprofile.save()
                        groupid = mygroupid
                        
                        # 다했으면 for문 탈출
                        break
                    # 그룹원이 차있으면 패스
                    else:
                        continue
            # 31~60 (왓챠)
            elif ottname == "WATCHA":
                for i in range(31,61):
                    mygroupid = i
                    
                    # 해당 그룹 불러오기
                    mygroup = Group.objects.get(id=mygroupid) 
                    # 그룹원이 다 안차있으면
                    if mygroup.numOfUser < 4:
                        # user1자리 비어있으면
                        if mygroup.user1ID == "":
                            # user1id에 넣고 numofuser 1올리고 
                            mygroup.user1ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user2 비어있으면
                        elif mygroup.user2ID == "":
                            # user2id에 넣고 numofuser 1올리고 
                            mygroup.user2ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user3 비어있으면
                        elif mygroup.user3ID == "":
                            # user3id에 넣고 numofuser 1올리고 
                            mygroup.user3ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user4 비어있으면
                        else:
                            # user4id에 넣고 numofuser 1올리고 
                            mygroup.user4ID = myuserid
                            mygroup.numOfUser += 1
                        
                        # 그룹 수정 후 유저 groupid ottname 수정
                        myprofile.groupID = mygroupid
                        myprofile.OTTname = ottname
                        # 수정한거 저장
                        mygroup.save()
                        myprofile.save()
                        groupid = mygroupid
                        # 다했으면 for문 탈출
                        break
                    # 그룹원이 차있으면 패스
                    else:
                        continue
            # 61~90 (웨이브)
            elif ottname == "WAVVE":
                for i in range(61,91):
                    mygroupid = i
                    
                    # 해당 그룹 불러오기
                    mygroup = Group.objects.get(id=mygroupid) 
                    # 그룹원이 다 안차있으면
                    if mygroup.numOfUser < 4:
                        # user1자리 비어있으면
                        if mygroup.user1ID == "":
                            # user1id에 넣고 numofuser 1올리고 
                            mygroup.user1ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user2 비어있으면
                        elif mygroup.user2ID == "":
                            # user2id에 넣고 numofuser 1올리고 
                            mygroup.user2ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user3 비어있으면
                        elif mygroup.user3ID == "":
                            # user3id에 넣고 numofuser 1올리고 
                            mygroup.user3ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user4 비어있으면
                        else:
                            # user4id에 넣고 numofuser 1올리고 
                            mygroup.user4ID = myuserid
                            mygroup.numOfUser += 1
                        
                        # 그룹 수정 후 유저 groupid ottname 수정
                        myprofile.groupID = mygroupid
                        myprofile.OTTname = ottname
                        # 수정한거 저장
                        mygroup.save()
                        myprofile.save()
                        groupid = mygroupid
                        # 다했으면 for문 탈출
                        break
                    # 그룹원이 차있으면 패스
                    else:
                        continue
            # 91~120 (티빙)
            else:
                for i in range(91,121):
                    mygroupid = i
                    
                    # 해당 그룹 불러오기
                    mygroup = Group.objects.get(id=mygroupid) 
                    # 그룹원이 다 안차있으면
                    if mygroup.numOfUser < 4:
                        # user1자리 비어있으면
                        if mygroup.user1ID == "":
                            # user1id에 넣고 numofuser 1올리고 
                            mygroup.user1ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user2 비어있으면
                        elif mygroup.user2ID == "":
                            # user2id에 넣고 numofuser 1올리고 
                            mygroup.user2ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user3 비어있으면
                        elif mygroup.user3ID == "":
                            # user3id에 넣고 numofuser 1올리고 
                            mygroup.user3ID = myuserid
                            mygroup.numOfUser += 1
                            
                        # user4 비어있으면
                        else:
                            # user4id에 넣고 numofuser 1올리고 
                            mygroup.user4ID = myuserid
                            mygroup.numOfUser += 1
                        
                        # 그룹 수정 후 유저 groupid ottname 수정
                        myprofile.groupID = mygroupid
                        myprofile.OTTname = ottname
                        # 수정한거 저장
                        mygroup.save()
                        myprofile.save()
                        groupid = mygroupid
                        # 다했으면 for문 탈출
                        break
                    # 그룹원이 차있으면 패스
                    else:
                        continue

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
ott 선택 -> 해당 유저의 id가 들어오겠지. 선택한 ott가 오겠지. -> userid, ottname
1)userid의 db에 들어가서 ottname에 ottname을 넣어주고
2)group 배정. 넷플 : 1~5 / 왓차 : 6~10 / 웨이브 : 11~15 / 티빙 : 16~20 -> 10개씩 배정 -> 실수해서 30개씩 해버렸네 이대로 픽스
3) group 배정할때 그룹 db 들어가서 numofuser 검사 후 user#id에 넣기
4) 위의 변경사항들 세이브

if group is full? groupID++ : user#id 배정 <- 이런식으로 하면될듯

"""