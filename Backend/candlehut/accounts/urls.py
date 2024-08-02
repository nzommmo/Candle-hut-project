from django.urls import path
from .views import CustomRegisterView, UserListView , LoginView ,RegisterView

urlpatterns = [
    path('register/', CustomRegisterView.as_view(), name='register'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/registration/', RegisterView.as_view(), name='registration'),
]
