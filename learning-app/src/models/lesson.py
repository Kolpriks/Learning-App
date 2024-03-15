from peewee import *
from models.guide import GuideModel
import configs.database

class LessonModel(Model):
    class Meta:
        database = configs.database.db
        db_table = 'Lessons'

    id = PrimaryKeyField()
    name = TextField()
    description = TextField()
    guide_id = ForeignKeyField(GuideModel)