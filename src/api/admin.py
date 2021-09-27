  
import os
from flask_admin import Admin
from .models import db, Favorites, User, City, Country, CharacteristicUser, Characteristic, SpokenLanguages, Language, Tenancy, Review, Room, ExpensesRoom, Expense, RoomArchive, FeaturesRoom, Feature
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(City, db.session))
    admin.add_view(ModelView(Country, db.session))
    admin.add_view(ModelView(CharacteristicUser, db.session))
    admin.add_view(ModelView(Characteristic, db.session))
    admin.add_view(ModelView(SpokenLanguages, db.session))
    admin.add_view(ModelView(Language, db.session))
    admin.add_view(ModelView(Tenancy, db.session))
    admin.add_view(ModelView(Review, db.session))
    admin.add_view(ModelView(Room, db.session))
    admin.add_view(ModelView(ExpensesRoom, db.session))
    admin.add_view(ModelView(Expense, db.session))
    admin.add_view(ModelView(RoomArchive, db.session))
    admin.add_view(ModelView(FeaturesRoom, db.session))
    admin.add_view(ModelView(Feature, db.session))
    admin.add_view(ModelView(Favorites, db.session))
     
    