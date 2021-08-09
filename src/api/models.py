from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
# to check the password
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120)) #Creo que es mejor añadir el nombre completo en vez de dividirlo por partes
    password = db.Column(db.String(80), nullable=False)
    birth_day = db.Column(db.date(120))
    phone = db.Column(db.String(120))
    sex = db.Column(db.String(120))
    
    id_photo= db.relationship('Photo', lazy=True)
    id_assesment= db.relationship('Assesment_User', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)

    owner = db.relationship('TenantRoomOwner', backref = 'owner', lazy='joined', foreign_keys ='TenantRoomOwner.id_owner')
    tenant = db.relationship('TenantRoomOwner',  backref = 'tenant', lazy = 'joined', foreign_keys ='TenantRoomOwner.id_tenant')
    def __repr__(self):
        return '<User %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "sex": self.sex,
            "password":self.password,
            "birth_day": self.birth_day,
            
            "id_photo": self.id_photo,
            "id_assesment": self.id_assesment
        }
        
    # method to check the password and that verify that it is the user password
    def check_password(self, password_param):
       return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))
#----------------------------------------------------------------------------------------------------------------------------
class UserArchives(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    url = db.Column(db.String(500))

    def __repr__(self):
        return '<UserArchives %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "url": self.url
        }   
#------------------------------------------------------------------------------------------------------------------------------
class RoomArchive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    kind= db.Column(db.String(10))

    def __repr__(self):
        return '<RoomArchive %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "room_id": self.room_id,
            "kind": self.kind
        }   
#------------------------------------------------------------------------------------------------------------------------------
class Room (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripction = db.Column(db.String(280))
    address= db.Column(db.String(220))
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    price= db.Column(db.Integer)
    deposit= db.Column(db.Integer)
  
    id_photo_room= db.relationship('Photo_Room', lazy=True)
    relation= db.relationship('TenantRoomOwner', lazy=True)
    def __repr__(self):
        return '<Room %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "descripction": self.descripction,
            "address": self.address,
            "city": self.city,
            "country": self.country,
            "owner_id": self.owner_id,
            "price": self.price,
            "deposit": self.deposit
        }
#------------------------------------------------------------------------------------------------------------------------------        
class Review_Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    tenant_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    review = db.Column(db.String(220))
    rating = db.Column(db.String(5))

    def __repr__(self):
        return '<Review_Owner %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "tenant_id": self.tenant_id,
            "review": self.review,
            "rating": self.rating
        }  
#------------------------------------------------------------------------------------------------------------------------------ 
class Review_Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    room_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    review = db.Column(db.String(220))
    rating = db.Column(db.String(5))

    def __repr__(self):
        return '<Review_Owner %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "room_id": self.room_id,
            "review": self.review,
            "rating": self.rating
        }  
#------------------------------------------------------------------------------------------------------------------------------ 
class SpokenLanguages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    languages_id = db.Column(db.String(20), db.ForeignKey('Languages.id'))
    
    def __repr__(self):
        return '<SpokenLanguages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "languages_id": self.languages_id
        }  
#------------------------------------------------------------------------------------------------------------------------------ 
class Languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    locale = db.Column(db.String(20))
    
    def __repr__(self):
        return '<Languages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "locale": self.locale
        }  
#------------------------------------------------------------------------------------------------------------------------------ 
class CharacteristicUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    descripction = db.Column(db.String(220))
    Characteristic_id = db.Column(db.Integer, db.ForeignKey('characteristic.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    def __repr__(self):
        return '<CharacteristicUser %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "descripction": self.descripction,
            "Characteristic_id": self.Characteristic_id,
            "user_id": self.user_id

        }  
#------------------------------------------------------------------------------------------------------------------------------   
class Characteristic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    descripction = db.Column(db.String(220))

    def __repr__(self):
        return '<Characteristic %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "descripction": self.descripction
        }  
#------------------------------------------------------------------------------------------------------------------------------   
