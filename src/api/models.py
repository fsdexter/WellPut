from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
# to check the password
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()
#------------------------------------------------------------------------------------------------------------------------------
#  USER
#------------------------------------------------------------------------------------------------------------------------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120)) #Creo que es mejor añadir el nombre completo en vez de dividirlo por partes
    password = db.Column(db.String(80), nullable=False)
    birth_day = db.Column(db.date(120))
    phone = db.Column(db.String(120))
    sex = db.Column(db.String(120))
    personal_descripction = db.Column(db.String(220))
    avatar_url=db.Column(db.String(220))

    #relaciones de usuario
    userArchive= db.relationship('UserArchives', lazy=True)
    review_Owner = db.relationship('Review_Owner', backref='User', lazy=True)
    characteristicUser= db.relationship('characteristicUser', backref='Characteristic', lazy=True)
    spokenLanguages= db.relationship('SpokenLanguages', backref='Languages', lazy=True)

    #relaciones de room
    review_Room= db.relationship('Review_Room', lazy=True)
    room= db.relationship('Room', lazy=True)

 #   owner = db.relationship('TenantRoomOwner', backref = 'owner', lazy='joined', foreign_keys ='TenantRoomOwner.id_owner')
 #   tenantrevir = db.relationship('TenantRoomOwner',  backref = 'tenant', lazy = 'joined', foreign_keys ='TenantRoomOwner.id_tenant')
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
            "avatar_url": self.avatar_url,
            "personal_descripction": self.personal_descripction,
        }
        
    # method to check the password and that verify that it is the user password
    def check_password(self, password_param):
       return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))
#ya------------------------------------------------------------------------------------------------------------------------------ 
class CharacteristicUser(db.Model):
    id = db.Column(db.Integer, primary_key=True) #quite el name y la descrpcion por que ya estan en la tablacon la que se relaciona
    Characteristic_id = db.Column(db.Integer, db.ForeignKey('characteristic.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<CharacteristicUser %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "Characteristic_id": self.Characteristic_id,
            "user_id": self.user_id

        }  
#ya ------------------------------------------------------------------------------------------------------------------------------   
class Characteristic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20)) #cambie a type para decir si es hobby ocupacion 
    name = db.Column(db.String(220)) #y el nombre de la ocupacion o hobby

    def __repr__(self):
        return '<Characteristic %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type
        } 
#ya------------------------------------------------------------------------------------------------------------------------------        
class Review_Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    tenant_id = db.Column(db.Integer, db.ForeignKey('User.id'))
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
#ya----------------------------------------------------------------------------------------------------------------------------
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
# ya------------------------------------------------------------------------------------------------------------------------------ 
class SpokenLanguages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    languages_id = db.Column(db.String(20), db.ForeignKey('Languages.id'))
    
    def __repr__(self):
        return '<SpokenLanguages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "languages_id": self.languages_id
        }  
#ya ------------------------------------------------------------------------------------------------------------------------------ 
class Languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    locale = db.Column(db.String(20))

    SpokenLanguages = db.relationship('SpokenLanguages', lazy=True)

    def __repr__(self):
        return '<Languages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "locale": self.locale
        }   
#------------------------------------------------------------------------------------------------------------------------------
#  ROOM
#------------------------------------------------------------------------------------------------------------------------------
class Room (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripction = db.Column(db.String(280))
    address= db.Column(db.String(220))
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    owner_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    price= db.Column(db.Integer)
    deposit= db.Column(db.Integer)
    tile=db.Column(db.String(120))#erwin no se si lo quito, pero como usamos estos campos en los formularios yo lo puse
    bed=db.Column(db.String(20))
    room=db.Column(db.String(20))

    roomArchive= db.relationship('RoomArchive', lazy=True)
    review_Room= db.relationship('Review_Room', lazy=True)
    characteristic= db.relationship('Characteristic_Room', lazy=True) 

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
            "deposit": self.deposit,
            "tile": self.tile, 
            "bed": self.bed, 
            "room": self.room
        }

#ya------------------------------------------------------------------------------------------------------------------------------
class RoomArchive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250))
    room_id = db.Column(db.Integer, db.ForeignKey('Room.id'))
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

#ya------------------------------------------------------------------------------------------------------------------------------ 
class Review_Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    room_id = db.Column(db.Integer, db.ForeignKey('Room.id'))
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
class Characteristic_Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('Room.id'))
    other_feature = db.Column(db.Integer, db.ForeignKey('Other_feature.id'))
    include_server = db.Column(db.Integer, db.ForeignKey('Include_server.id'))


    def __repr__(self):
        return '<Characteristic_Room %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "other_feature": self.other_feature,
            "room_id": self.room_id,
            "include_server": self.include_server
        }  
        #------------------------------------------------------------------------------------------------------------------------------   
class Include_server(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripction = db.Column(db.String(20))
   
   characteristic_Room= db.relationship('Characteristic_Room', lazy=True)

    def __repr__(self):
        return '<Include_server %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "descripction": self.descripction,
        }  
#ya------------------------------------------------------------------------------------------------------------------------------   
class Other_feature(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripction = db.Column(db.String(20))
   
   characteristic_Room= db.relationship('Characteristic_Room', lazy=True)

    def __repr__(self):
        return '<Other_feature %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "descripction": self.descripction,
        }  