from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from eralchemy import render_er

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120)) #Creo que es mejor añadir el nombre completo en vez de dividirlo por partes
    password = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(120))
    interests = db.Column(db.String(120))
    languages = db.Column(db.String(120))
    phone = db.Column(db.String(120))
    nationality = db.Column(db.String(120))
    age = db.Column(db.Integer)
    sex = db.Column(db.String(120))
    occupation = db.Column(db.String(120))
    description = db.Column(db.String(120))
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
            "city": self.city,
            "interests": self.interests,
            "languages": self.languages,
            "phone": self.phone,
            "nationality": self.nationality,
            "age": self.age,
            "sex": self.sex,
            "occupation": self.occupation,
            "description": self.description,
            "is_active": self.is_active,
            "id_photo": self.id_photo,
            "id_assesment": self.id_assesment
        }

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<Photo %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "description": self.description
        }   

class Assesment_User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<Assesment_User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "description": self.description
        }  

class Room (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(120))
    street= db.Column(db.String(80))
    number= db.Column(db.Integer)
    floor= db.Column(db.Integer)
    door= db.Column(db.String(80))
    bell= db.Column(db.String(80))
    neighbourhood= db.Column(db.String(120))
    price= db.Column(db.Integer)
    deposit= db.Column(db.Integer)
    inclddedService=db.Column(db.String(120))
    condition=db.Column(db.String(120))
    title = db.Column(db.String(120))
    descripction = db.Column(db.String(280))
    bed=db.Column(db.String(80))
    room=db.Column(db.String(80))
    feature=db.Column(db.String(80))
    id_assesment_room= db.relationship('Assesment_Room', lazy=True)
    id_photo_room= db.relationship('Photo_Room', lazy=True)
    relation= db.relationship('TenantRoomOwner', lazy=True)
    def __repr__(self):
        return '<Room %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "city": self.city,
            "street": self.street,
            "number": self.number,
            "floor": self.floor,
            "door": self.door,
            "bell": self.bell,
            "neighbourhood": self.neighbourhood,
            "price": self.price,
            "deposit": self.deposit,
            "inclddedService": self.inclddedService,
            "condition": self.condition,
            "title": self.title,
            "descripction": self.descripction,
            "bed": self.bed,
            "room": self.room,
            "feature": self.feature,
            "id_assesment_room": self.id_assesment_room,
            "id_photo_room": self.id_photo_room
        }

class Photo_Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    description = db.Column(db.String(20))
    
    def __repr__(self):
        return '<Photo_Room %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "description": self.description
        }  

class Assesment_Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    description = db.Column(db.String(20))
     
    def __repr__(self):
        return '<Assesment_Room %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "description": self.description
        }  

class TenantRoomOwner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    id_tenant = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<TenantRoomOwner %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "description": self.description
        }  

try:
    result = render_er(db, 'diagram.png')
    print("Success! Check the diagram.png file")
except Exception as e:
    print("There was a problem genering the diagram")
    raise e
