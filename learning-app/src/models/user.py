from peewee import Model

class UserModel(Model):
    class Meta:
        datatable = None
        db_table = 'Users'