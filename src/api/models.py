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
    birthday = db.Column(db.DateTime)
    phone = db.Column(db.String(120))
    sex = db.Column(db.String(120))
    personal_description = db.Column(db.String(220))
    avatar_url = db.Column(db.String(220), unique=False, nullable=True)
    city = db.Column(db.String(120)) 

    #relaciones de usuario (1 a muchos)
    user_archive= db.relationship('UserArchives', lazy=True)
    characteristic_user = db.relationship('CharacteristicUser', lazy=True)
    spoken_spoken_languages = db.relationship('Spokenspoken_languages', lazy=True)
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
            "birthday": self.birthday,
            "avatar_url": self.avatar_url,
            "personal_description": self.personal_description,
            "city": self.city,
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


class Spokenspoken_languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    spoken_languages_id = db.Column(db.Integer, db.ForeignKey('spoken_languages.id'))
    
    def __repr__(self):
        return '<Spokenspoken_languages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "spoken_languages_id": self.spoken_languages_id
        }  
 
class spoken_languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    locale = db.Column(db.String(50))

    Spoken_spoken_languages = db.relationship('Spokenspoken_languages', lazy=True)
    

    def __repr__(self):
        return '<spoken_languages %r>' % self.id

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
    description = db.Column(db.String(280))
    address = db.Column(db.String(220))
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    price = db.Column(db.Integer)
    deposit = db.Column(db.Integer)
    title =db.Column(db.String(120))
    type_bed = db.Column(db.String(50))
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
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "country": self.country,
            "price": self.price,
            "deposit": self.deposit,
            "title": self.title, 
            "type_bed": self.type_bed,
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
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<ExpensesIncluded %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.id,
            "description": self.description
        }  
         
class OtherFeature(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<OtherFeature %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "description": self.description,
        }  


#------------------------------------------------------------------------------------------------------------------------------
#  SEED
#------------------------------------------------------------------------------------------------------------------------------
class SeedDataUser:

  def __init__(self):
    self.first_user = None
    self.second_user = None
    self.third_user = None
    self.fourth_user = None
    self.fifth_user = None

  def create_seed_user(self):
    self.first_user = User( 
        id=1,
        email ="adan_user@gmail.com",
        full_name ="Adan Genesis",
        password = "1111",
        birthday ="01/01/1980",
        phone ="666362969",
        sex ="male",
        personal_description ="ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        avatar_url ="",
        city="Madrid"
    )

    self.second_user = User( 
        id=2,
        email ="eva_user@gmail.com",
        full_name ="Eva Gelion",
        password = "1111",
        birthday ="01/01/1982",
        phone ="666362970",
        sex ="female",
        personal_description ="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        avatar_url ="",
        city="Madrid"
    )

    self.third_user = User( 
        id=3,
        email ="sara_user@gmail.com",
        full_name ="Sara Genesis",
        password = "1111",
        birthday ="01/01/1985",
        phone ="666362978",
        sex ="female",
        personal_description ="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
        avatar_url ="",
        city="Barcelona"
    )

    self.fourth_user = User( 
        id=4,
        email ="abraham_user@gmail.com",
        full_name ="Abraham Genesis",
        password = "1111",
        birth_day ="01/01/1990",
        phone ="666362980",
        sex ="male",
        personal_description ="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
        avatar_url ="",
        city="Granada"
    )

    self.fifth_user = User( 
        id=5,
        email ="noe_user@gmail.com",
        full_name ="Noé Genesis",
        password = "1111",
        birth_day ="01/01/1992",
        phone ="666362986",
        sex ="male",
        personal_description ="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
        avatar_url ="",
        city="Sevilla"
    )
  
    db.session.add(self.first_user)
    db.session.add(self.second_user)
    db.session.add(self.third_user)
    db.session.add(self.fourth_user)
    db.session.add(self.fifth_user)
    db.session.commit()

  def create_seed_room(self):
    self.first_room = Room( 
        id=1,
        owner_id=1,
        city= "Madrid",
        address= "Bastero 6",
        title="Habitacion en casa moderna.",
        description="Cras ac fermentum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        price= 450,
        deposit=450,
        type_bed="single",
        tenant_id= self.first_user.id
    )

    self.second_room = Room( 
        id=2,
        owner_id=1,
        city= "Madrid",
        address= "Bastero 6",
        title="Habitacion pequeña y luminosa.",
        description="Vestibulum auctor purus in leo laoreet, ac aliquam sem tincidunt. Vivamus eleifend magna a leo pulvinar.",
        price= 400,
        deposit=400,
        type_bed="single",
        tenant_id= self.second_user.id
    )

    self.third_room = Room( 
        id=3,
        owner_id=1,
        city= "Madrid",
        address= "Bastero 6",
        title="Habitacion suite con cama grande.",
        description="Aliquam sit amet interdum lacus. Proin finibus vehicula sagittis.",
        price= 500,
        deposit= 500,
        type_bed="double",
        tenant_id= self.third_user.id
    )

    self.fourth_room = Room( 
        id=4,
        owner_id=1,
        city= "Madrid",
        address= "Bastero 6",
        title="Hermosa habitación amueblada.",
        description="Ut non lectus quis libero ultricies luctus sed eget justo. Nunc molestie finibus vulputate. Aliquam erat volutpat.Ut non lectus quis libero.",
        price= 500,
        deposit= 500,
        type_bed="double",
        tenant_id= None
    )

    db.session.add(self.first_room)
    db.session.add(self.second_room)
    db.session.add(self.third_room)
    db.session.add(self.fourth_room)
    db.session.commit()

  def create_seed_data(self):
    self.create_seed_user()
    self.create_seed_room()
    



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
