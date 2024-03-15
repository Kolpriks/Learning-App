import configs.database
from models.user import UserModel
from models.guide import GuideModel
from models.lesson import LessonModel
from peewee import *


configs.database.db.create_tables([UserModel, GuideModel, LessonModel])