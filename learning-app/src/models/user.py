from peewee import *
import configs.database

class UserModel(Model):
    class Meta:
        datatable = configs.database.db
        db_table = 'Users'

    id = PrimaryKeyField()
    name = CharField(max_length=20)
    surname = CharField(max_length=20)
    age = IntegerField()