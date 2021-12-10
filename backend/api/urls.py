from django.urls import path
from .views import GroupView, DetailGroupView, selectOTT, getGroup

urlpatterns = [
    path('group/<int:id>/', DetailGroupView.as_view()),
    path('group/', GroupView.as_view()),
    path('select/', selectOTT.as_view()),
    path('getGroupMember/', getGroup),
    #path('groupOut/', groupOut),
]
