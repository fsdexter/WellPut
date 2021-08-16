from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, DateTime
# to check the password
from werkzeug.security import safe_str_cmp
from werkzeug.security import generate_password_hash

db = SQLAlchemy()
#------------------------------------------------------------------------------------------------------------------------------
#  USER
#------------------------------------------------------------------------------------------------------------------------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120))
    password = db.Column(db.String(250), nullable=False)
    birth_day = db.Column(db.DateTime)
    phone = db.Column(db.String(120))
    sex = db.Column(db.String(120))
    personal_descripction = db.Column(db.String(220))
    avatar_url = db.Column(db.String(220), unique=False, nullable=True)

    #relaciones de usuario (1 a muchos)
    user_archive= db.relationship('UserArchives', lazy=True)
    characteristic_user = db.relationship('CharacteristicUser', lazy=True)
    spoken_languages = db.relationship('SpokenLanguages', lazy=True)
    #forma para relacionar una misma tabla con dos columnas de otra tabla a la vez
    owner = db.relationship('ReviewOwner', backref='owner', lazy='joined', foreign_keys ='ReviewOwner.owner_id')
    tenant = db.relationship('ReviewOwner', backref='tenant', lazy='joined', foreign_keys ='ReviewOwner.tenant_id')

    #relaciones de Room
    owner_room = db.relationship('Room', lazy=True)
    review_room= db.relationship('ReviewRoom', lazy=True)
    
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
   

class CharacteristicUser(db.Model):
    #quite el name y la descrpcion por que ya estan en la tabla con la que se relaciona
    id = db.Column(db.Integer, primary_key=True) 
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

  
class Characteristic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20)) #cambie a type para decir si es hobby ocupacion 
    name = db.Column(db.String(220)) #y el nombre de la ocupacion o hobby
    
    # 1 característica puede ser tenida por muchos usuarios (1 a muchos)
    characteristic_user = db.relationship('CharacteristicUser', lazy=True)

    def __repr__(self):
        return '<Characteristic %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type
        } 

      
class ReviewOwner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    tenant_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    comment = db.Column(db.String(220))
    rating = db.Column(db.Integer)

    def __repr__(self):
        return '<ReviewOwner %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "tenant_id": self.tenant_id,
            "comment": self.comment,
            "rating": self.rating
        }  


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


class SpokenLanguages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    languages_id = db.Column(db.Integer, db.ForeignKey('languages.id'))
    
    def __repr__(self):
        return '<SpokenLanguages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "languages_id": self.languages_id
        }  
 
class Languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    locale = db.Column(db.String(50))

    Spoken_languages = db.relationship('SpokenLanguages', lazy=True)
    

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
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    photo_url = db.Column(db.String(255), unique=False, nullable=True)
    descripction = db.Column(db.String(280))
    address = db.Column(db.String(220))
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    price = db.Column(db.Integer)
    deposit = db.Column(db.Integer)
    title =db.Column(db.String(120))
    type_bed = db.Column(db.String(50))
    type_room = db.Column(db.String(50))
    lat = db.Column(db.Float(7))
    lng = db.Column(db.Float(7))

    room_archive = db.relationship('RoomArchive', lazy=True)
    review_Room = db.relationship('ReviewRoom', lazy=True)
    expenses_included = db.relationship('ExpensesIncluded', lazy=True)
    other_feature = db.relationship('OtherFeature', lazy=True)

    def __repr__(self):
        return '<Room %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "photo_url": self.photo_url,
            "descripction": self.descripction,
            "address": self.address,
            "city": self.city,
            "country": self.country,
            "price": self.price,
            "deposit": self.deposit,
            "title": self.title, 
            "type_bed": self.type_bed, 
            "type_room": self.type_room
        }


class RoomArchive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    kind = db.Column(db.String(20))

    def __repr__(self):
        return '<RoomArchive %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "room_id": self.room_id,
            "kind": self.kind
        }   


class ReviewRoom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    comment = db.Column(db.String(220))
    rating = db.Column(db.Integer)

    def __repr__(self):
        return '<ReviewRoom %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "room_id": self.room_id,
            "comment": self.comment,
            "rating": self.rating
        }  
 
  
class ExpensesIncluded(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    descripction = db.Column(db.String(20))

    def __repr__(self):
        return '<ExpensesIncluded %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.id,
            "descripction": self.descripction
        }  
         
class OtherFeature(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    descripction = db.Column(db.String(20))

    def __repr__(self):
        return '<OtherFeature %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "descripction": self.descripction,
        }  


#------------------------------------------------------------------------------------------------------------------------------
#  SEED
#------------------------------------------------------------------------------------------------------------------------------
class SeedDataUser:

  def __init__(self):
    self.first_user = None

  def create_seed_user(self):
    self.first_user = User( 
    id ="0",
    email ="seed_user@gmail.com",
    full_name ="Monopoly Scruguer",
    password = generate_password_hash("seed00000", "sha256"),
    birth_day ="01/01/1984",
    phone ="666362969",
    sex ="male",
    personal_descripction ="loren seed",
    avatar_url ="https://i.ytimg.com/vi/ZePL6bo2nTA/maxresdefault.jpg"
    )
    

    db.session.add(self.first_user)
    db.session.commit()

  def create_seed_data(self):
    self.create_seed_user()



#------------------------------------------------------------------------------------------------------------------------------
# Comments:
'''
1. Create 5 fake users  
    1.1 One owner.
    1.2 Three roomates.
    1.3 One searching.
2. Create 4 fake rooms.
    2.1 Three roomates(1.2) are living here.

3. Creation order
    3.1 Create users.
    3.2 Create Rooms.
    3.3 Create associations between em.
    
    '''




#------------------------------------------------------------------------------------------------------------------------------
