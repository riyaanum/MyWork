from django.urls import path
from . import views
# from django.conf.urls import url
urlpatterns=[
    path('',views.index,name="app_ajax"),
    path('register',views.register,name="register"),
    path('regcod',views.regcod,name="regcod"),
    path('searchpage',views.searchpage,name="searchpage"),
    path('fillname',views.fillname,name="fillname"),
    path('searchcontent',views.searchcontent,name="searchcontent"),
    path('updatecontent',views.updatecontent,name="updatecontent"),
]