from peewee import *
import configs.database

class UserModel(Model):
    class Meta:
        database = configs.database.db
        db_table = 'Users'

    email = TextField(unique=True, primary_key=True)
    name = CharField(max_length=20)
    password = CharField(max_length=32)
    age = IntegerField()