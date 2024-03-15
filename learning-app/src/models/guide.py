from peewee import *
import configs.database

class GuideModel(Model):
    class Meta:
        database = configs.database.db
        db_table = 'Guides'

    id = PrimaryKeyField()
    name = TextField()
    description = TextField()