from django.contrib import admin
from . models import Facolta,Esame,AppelloEsame,Aula

# Register your models here.
admin.site.register(Facolta)
admin.site.register(Esame)
admin.site.register(AppelloEsame)
admin.site.register(Aula)