from django.urls import path,include
from .views import CustomRegisterView, UserListView , LoginView ,RegisterView,ProductViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'products', ProductViewSet)


urlpatterns = [
    path('register/', CustomRegisterView.as_view(), name='register'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/registration/', RegisterView.as_view(), name='registration'),
    path('', include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)