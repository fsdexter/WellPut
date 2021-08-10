  
import os
from flask_admin import Admin
from .models import db, User, ReviewOwner, CharacteristicUser, Characteristic, UserArchives, SpokenLanguages, Languages, Room, ReviewRoom, RoomArchive, ExpensesIncluded, OtherFeature
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(ReviewOwner, db.session))
    admin.add_view(ModelView(CharacteristicUser, db.session))
    admin.add_view(ModelView(Characteristic, db.session))
    admin.add_view(ModelView(UserArchives, db.session))
    admin.add_view(ModelView(SpokenLanguages, db.session))
    admin.add_view(ModelView(Languages, db.session))
    admin.add_view(ModelView(Room, db.session))  
    admin.add_view(ModelView(ReviewRoom, db.session))   
    admin.add_view(ModelView(RoomArchive, db.session))  
    admin.add_view(ModelView(ExpensesIncluded, db.session))  
    admin.add_view(ModelView(OtherFeature, db.session))