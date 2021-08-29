from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import relationship, backref
# to check the password
from werkzeug.security import safe_str_cmp
from werkzeug.security import generate_password_hash

db = SQLAlchemy()



#------------------------------------------------------------------------------------------------------------------------------
#  USER
#------------------------------------------------------------------------------------------------------------------------------
#characteristic = db.Table('characteristic',
#    db.Column('characteristic_id', db.Integer, db.ForeignKey('characteristic.id'), primary_key=True),
#    db.Column('user_id', db.Integer, db.ForeignKey('user_id'), primary_key=True)
#)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    last_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    birthday = db.Column(db.Date, nullable=True)
    phone = db.Column(db.String(120), nullable=True)
    gender = db.Column(db.String(120), nullable=True)
    description = db.Column(db.String(220), nullable=True)
    avatar_url = db.Column(db.String(220), unique=False, nullable=True)
    
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'))
    city =  db.relationship("City", back_populates="users")
    
    tenancies = db.relationship("Tenancy", back_populates="user")
    rooms = db.relationship("Room", back_populates="user")
    
    language = db.relationship("Language", secondary="spoken_languages")
    characteristic = db.relationship("Characteristic", secondary="characteristic_user", lazy='subquery')
    
    favorites = db.relationship("Favorites", back_populates="user")
    
    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "password":self.password,
            "birthday": self.birthday,
            "phone": self.phone,
            "gender": self.gender,
            "description": self.description,
            "avatar_url": self.avatar_url,
            "city_id": self.city_id,
        }
        
    # method to check the password and that verify that it is the user password
    def check_password(self, password_param):
       return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

#------------------------------------------------------------------------------------------------------------------------------
#  CITY
#------------------------------------------------------------------------------------------------------------------------------
class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    lat = db.Column(db.Float(15))
    lng = db.Column(db.Float(15))
    
    country_id =  db.Column(db.Integer, db.ForeignKey('country.id'))
    country =  db.relationship("Country", back_populates="cities")
    
    users =  db.relationship("User", back_populates="city")
    
    rooms =  db.relationship("Room", back_populates="city")
    
    def __repr__(self):
        return '<City %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lat": self.lat,
            "lng": self.lng,
            "country_id": self.country_id
        }

#------------------------------------------------------------------------------------------------------------------------------
#  Country
#------------------------------------------------------------------------------------------------------------------------------
class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    
    cities = db.relationship("City", back_populates="country")
    
    def __repr__(self):
        return '<Country %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

#------------------------------------------------------------------------------------------------------------------------------
#  Characteristics User: Tabla intermedia entre Usuario y caracteristicas (muchos a muchos)
#------------------------------------------------------------------------------------------------------------------------------       
class CharacteristicUser(db.Model): 
    id = db.Column(db.Integer, primary_key=True) 
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    characteristic_id = db.Column(db.Integer, db.ForeignKey('characteristic.id'))
    
    user = db.relationship("User", backref=backref("characteristicUser", cascade="all, delete-orphan"))
    characteristic = db.relationship("Characteristic", backref=backref("characteristicUser", cascade="all, delete-orphan"))

    
    def __repr__(self):
        return '<CharacteristicUser %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "characteristic_id": self.characteristic_id,
            "user_id": self.user_id
        }  

class Characteristic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(220))
    kind = db.Column(db.String(20)) # -->> Occupation e Interests
   
    user = db.relationship("User", secondary="characteristic_user")

    def __repr__(self):
        return '<Characteristic %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "kind": self.kind
        } 

#------------------------------------------------------------------------------------------------------------------------------
# Languages
#------------------------------------------------------------------------------------------------------------------------------
class SpokenLanguages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    language_id = db.Column(db.Integer, db.ForeignKey('language.id'))
    
    user = db.relationship("User", backref=backref("spoken_languages", cascade="all, delete-orphan"))
    language = db.relationship("Language", backref=backref("spoken_languages", cascade="all, delete-orphan"))
    
    def __repr__(self):
        return '<SpokenLanguages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "language_id": self.language_id
        }  
 
class Language(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    locale = db.Column(db.String(50))

    user = db.relationship("User", secondary="spoken_languages")
    
    def __repr__(self):
        return '<Language %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "locale": self.locale
        }   

#------------------------------------------------------------------------------------------------------------------------------
#  Tenancy (relation between tenant and room)
#------------------------------------------------------------------------------------------------------------------------------
class Tenancy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="tenancies")

    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    room = db.relationship("Room", back_populates="tenancies")
    
    reviews = db.relationship("Review", back_populates="tenancy")
    
    def __repr__(self):
        return '<Tenancy %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            #"user_id": self.user_id, --->> LOS DATOS SALEN DIRECTOS EN LA TENANCY
            #"room_id": self.room_id
        } 
        
#------------------------------------------------------------------------------------------------------------------------------
#  Review
#------------------------------------------------------------------------------------------------------------------------------
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(220))
    rating = db.Column(db.Integer)
    date = db.Column(db.Date)
    
    tenancy_id = db.Column(db.Integer, db.ForeignKey('tenancy.id'))
    tenancy = db.relationship("Tenancy", back_populates="reviews")

    def __repr__(self):
        return '<Review %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "rating": self.rating,
            "date": self.date,
            #"tenancy_id": self.tenancy_id
        }  
        
#------------------------------------------------------------------------------------------------------------------------------
#  ROOM
#------------------------------------------------------------------------------------------------------------------------------
class Room (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(280))
    address = db.Column(db.String(220))
    country = db.Column(db.String(120))
    price = db.Column(db.String(50))
    deposit = db.Column(db.String(50))
    title =db.Column(db.String(120))
    type_bed = db.Column(db.String(50))
    lat = db.Column(db.Float(15))
    lng = db.Column(db.Float(15))
    
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'))
    city =  db.relationship("City", back_populates="rooms")
    
    tenancies = db.relationship("Tenancy", back_populates="room")

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="rooms")

    room_archive = db.relationship("RoomArchive", back_populates="room")

    expense = db.relationship("Expense", secondary="expenses_room")
    feature = db.relationship("Feature", secondary="features_room")
    
    # Relación de 1 Room muchos Favorites
    favorites = db.relationship("Favorites", back_populates="room")
   
    # Relación de 1 Favorites muchas Rooms
    # favorites_id = db.Column(db.Integer, db.ForeignKey('favorites.id'))
    # favorites = db.relationship("Favorites", back_populates="room")
    
    def __repr__(self):
        return '<Room %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "address": self.address,
            "country": self.country,
            "price": self.price,
            "deposit": self.deposit,
            "title": self.title, 
            "type_bed": self.type_bed,
            "lat": self.lat,
            "lng": self.lng,
            #"city_id": self.city_id, -->> No hace falta pq en su método GET ya aparece la ciudad
            "user_id": self.user_id,
            #"favorites_id": self.favorites_id,
        }
        
#------------------------------------------------------------------------------------------------------------------------------
#  Expenses ROOM
#------------------------------------------------------------------------------------------------------------------------------  
class ExpensesRoom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    expense_id = db.Column(db.Integer, db.ForeignKey('expense.id'))
    
    room = db.relationship("Room", backref=backref("expensesRoom", cascade="all, delete-orphan"))
    expense = db.relationship("Expense", backref=backref("expensesRoom", cascade="all, delete-orphan"))
    
    def __repr__(self):
        return '<ExpensesRoom %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "expense_id": self.expense_id,
            "room_id": self.room_id
        }
        
#------------------------------------------------------------------------------------------------------------------------------
#  Expense
#------------------------------------------------------------------------------------------------------------------------------  
class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    
    room = db.relationship("Room", secondary="expenses_room")
    
    def __repr__(self):
        return '<Expense %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
        
#------------------------------------------------------------------------------------------------------------------------------
#  RoomArchive
#------------------------------------------------------------------------------------------------------------------------------
class RoomArchive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250))
    
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    room = db.relationship("Room", back_populates="room_archive")

    def __repr__(self):
        return '<RoomArchive %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "room_id": self.room_id
        }   
 
 
#------------------------------------------------------------------------------------------------------------------------------
#  Features Room
#------------------------------------------------------------------------------------------------------------------------------        
class FeaturesRoom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    feature_id = db.Column(db.Integer, db.ForeignKey('feature.id'))
    
    room = db.relationship("Room", backref=backref("featuresRoom", cascade="all, delete-orphan"))
    feature = db.relationship("Feature", backref=backref("featuresRoom", cascade="all, delete-orphan"))

    def __repr__(self):
        return '<FeaturesRoom %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "feature_id": self.feature_id,
        }
  
#------------------------------------------------------------------------------------------------------------------------------
#  Feature
#------------------------------------------------------------------------------------------------------------------------------        
class Feature(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    
    room = db.relationship("Room", secondary="features_room")

    def __repr__(self):
        return '<Feature %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }  

  
#------------------------------------------------------------------------------------------------------------------------------
#  Favorites
#------------------------------------------------------------------------------------------------------------------------------        
class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="favorites")
    
    # Relación de 1 Room muchos Favorites
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    room = db.relationship("Room", back_populates="favorites")
    
    # Relación de 1 Favorites muchas Rooms
   # room = db.relationship("Room", back_populates="favorites")
    

    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            #"user_id": self.user_id, --->>> como salen el los datos del usuario, no haría falta serializarlo
            "room_id": self.room_id,
        }  



#------------------------------------------------------------------------------------------------------------------------------
#  SEED
#------------------------------------------------------------------------------------------------------------------------------

class SeedData:
    def __init__(self):
        self.first_user = None
        self.second_user = None
        self.third_user = None
        self.fourth_user = None
        self.fifth_user = None
        self.first_city = None
        self.first_country = None
       # self.first_favorites = None --->>> Un favorito muchas habitaciones
        self.first_room = None
        self.second_room = None
        self.third_room = None
        self.fourth_room = None
        self.first_favorites = None # --->>> una habitación muchos favoritos
        self.second_favorites = None
        self.third_favorites = None
        self.first_tenancy = None
        self.second_tenancy = None
        self.third_tenancy = None
        self.first_review = None
        self.second_review = None
        self.third_review = None
        self.first_characteristic = None
        self.second_characteristic = None
        self.third_characteristic = None
        self.fourth_characteristic = None
        self.fifth_characteristic = None
        self.first_characteristicUser = None 
        self.second_characteristicUser = None
        self.third_characteristicUser = None 
        self.fourth_characteristicUser = None 
        self.fifth_characteristicUser = None
        self.first_language = None
        self.second_language = None
        self.third_language = None
        self.first_spokenLanguages = None
        self.second_spokenLanguages = None
        self.third_spokenLanguages = None
        self.fourth_spokenLanguages = None
        self.first_expense = None
        self.second_expense = None
        self.third_expense = None
        self.fourth_expense = None
        self.first_expensesRoom = None
        self.second_expensesRoom = None
        self.third_expensesRoom = None
        self.fourth_expensesRoom = None
        self.first_roomArchive = None
        self.second_roomArchive = None
        self.third_roomArchive = None
        self.fourth_roomArchive = None
        self.fifth_roomArchive = None
        self.sixth_roomArchive = None
        self.seventh_roomArchive = None
        self.eighth_roomArchive = None
        self.first_feature = None
        self.second_feature = None
        self.third_feature = None
        self.fourth_feature = None
        self.first_featuresRoom = None
        self.second_featuresRoom = None
        self.third_featuresRoom = None
        self.fourth_featuresRoom = None 
        
    
#------------------------
#  Country
#------------------------
    def create_seed_country(self):
        self.first_country = Country(
            name = "Spain"
        )
        
        db.session.add(self.first_country)
        db.session.commit()  
          
#------------------------
#  City
#------------------------    
    def create_seed_city(self):
        self.first_city = City(
            name = "Madrid",
            lat = 40.42297365084645, 
            lng = -3.707010830149073,
            country_id = self.first_country.id
        )
        
        db.session.add(self.first_city)
        db.session.commit()
        
#------------------------
#  User
#------------------------
    def create_seed_user(self):
        self.first_user = User( 
            name = "Adan",
            last_name = "Sánchez Romero",
            email = "adan_user@gmail.com",
            password = "1111",
            birthday = "01/01/1980",
            phone = "666362969",
            gender = "male",
            description = "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            avatar_url = "https://d1bvpoagx8hqbg.cloudfront.net/259/b59e40d45c7460cb65467d2000705086.jpg",
            city_id = self.first_city.id
        ) 

        self.second_user = User( 
            email = "eva_user@gmail.com",
            name = "Eva",
            last_name = "Genesis",
            password = "1111",
            birthday = "01/01/1982",
            phone = "666362970",
            gender = "female",
            description = "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            avatar_url = "https://img.europapress.es/fotoweb/fotonoticia_20200907131946_420.jpg",
            city_id = self.first_city.id
        )

        self.third_user = User( 
            email = "sara_user@gmail.com",
            name = "Sara",
            last_name = "Santiago Rojas",
            password = "1111",
            birthday = "01/01/1985",
            phone = "666362978",
            gender = "female",
            description = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
            avatar_url = "https://img.europapress.es/fotoweb/fotonoticia_20180118120033_420.jpg",
            city_id = self.first_city.id
        )

        self.fourth_user = User( 
            email = "abraham_user@gmail.com",
            name = "Abraham",
            last_name = "Browm",
            password = "1111",
            birthday = "01/01/1990",
            phone = "666362980",
            gender = "male",
            description =  "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
            avatar_url = "https://i.pinimg.com/474x/98/04/af/9804afb070c93c2260c8de5505651e7e.jpg",
            city_id = self.first_city.id
        )

        self.fifth_user = User( 
            email = "noe_user@gmail.com",
            name = "Noé",
            last_name = "Herrera Muñoz",
            password = "1111",
            birthday = "01/01/1992",
            phone = "666362986",
            gender = "male",
            description = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
            avatar_url = "https://media.istockphoto.com/photos/teenage-boy-with-glasses-sitting-outside-picture-id1175540541?k=6&m=1175540541&s=612x612&w=0&h=1KwTZmQz7E6iMcB4vGYOfLYSWz62qtR7GdaUrI7-Jjw=",
            city_id = self.first_city.id
        )
    
        db.session.add(self.first_user)
        db.session.add(self.second_user)
        db.session.add(self.third_user)
        db.session.add(self.fourth_user)
        db.session.add(self.fifth_user)
        db.session.commit()
   
#------------------------
#  Room
#------------------------
    def create_seed_room(self):
        self.first_room = Room( 
            description = "Cras ac fermentum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            address = "Bastero 6",
            country = "Spain",
            price = "450",
            deposit = "450",
            title = "Habitacion en casa moderna.",
            type_bed = "single",
            lat = 33.4329,
            lng = -4.642371,
            city_id = self.first_city.id,
            user_id = self.first_user.id,
            #favorites_id = self.first_favorites.id
        )

        self.second_room = Room( 
            description = "Vestibulum auctor purus in leo laoreet, ac aliquam sem tincidunt. Vivamus eleifend magna a leo pulvinar.",
            address = "Bastero 6",
            country = "Spain",
            price = "400",
            deposit = "400",
            title = "Habitacion pequeña y luminosa.",
            type_bed = "single",
            lat = 33.4329,
            lng = -4.642371,
            city_id = self.first_city.id,
            user_id = self.first_user.id,
            #favorites_id = self.first_favorites.id
        )

        self.third_room = Room( 
            description = "Aliquam sit amet interdum lacus. Proin finibus vehicula sagittis.",
            address = "Bastero 6",
            country = "Spain",
            price = "500",
            deposit = "500",
            title = "Habitacion suite con cama grande.",
            type_bed ="double",
            lat = 33.4329,
            lng = -4.642371,
            city_id = self.first_city.id,
            user_id = self.first_user.id,
            #favorites_id = None
        )

        self.fourth_room = Room( 
            description = "Ut non lectus quis libero ultricies luctus sed eget justo. Nunc molestie finibus vulputate. Aliquam erat volutpat.Ut non lectus quis libero.",
            address= "Bastero 6",
            country = "Spain",
            price = "500",
            deposit = "500",
            title = "Hermosa habitación amueblada.",
            type_bed = "double",
            lat = 33.4329,
            lng = -4.642371,
            city_id = self.first_city.id,
            user_id = self.first_user.id,
            #favorites_id = None
        )

        db.session.add(self.first_room)
        db.session.add(self.second_room)
        db.session.add(self.third_room)
        db.session.add(self.fourth_room)
        db.session.commit()
        
#------------------------
#  Favorites
#------------------------
    def create_seed_favorites(self):
        self.first_favorites = Favorites(
            room_id = self.first_room.id,
            user_id = self.second_user.id
        )
        
        self.second_favorites = Favorites(
            room_id = self.second_room.id,
            user_id = self.second_user.id
        )
        
        self.third_favorites = Favorites(
            room_id = self.third_room.id,
            user_id = self.second_user.id
        )
        
        db.session.add(self.first_favorites)
        db.session.add(self.second_favorites)
        db.session.add(self.third_favorites)
        db.session.commit() 

#------------------------
#  Tenancy (La relación entre inquilino y habitación)
#------------------------
    def create_seed_tenancy(self):
        self.first_tenancy = Tenancy(
            user_id = self.second_user.id,
            room_id = self.first_room.id
        )
        
        self.second_tenancy = Tenancy(
            user_id = self.third_user.id,
            room_id = self.first_room.id
        )
        
        self.third_tenancy = Tenancy(
            user_id = self.fourth_user.id,
            room_id = self.first_room.id
        )
        
        db.session.add(self.first_tenancy)
        db.session.add(self.second_tenancy)
        db.session.add(self.third_tenancy)
        db.session.commit()

#------------------------
#  Review
#------------------------
    def create_seed_review(self):
        self.first_review = Review( 
            comment = "The neighborhood is great, it is well connected by public transport, the metro is 5 minutes away and there are many nice areas to hang out.",
            rating = 4,
            date = "01/01/2021",
            tenancy_id = self.first_tenancy.id
        )

        self.second_review = Review( 
            comment = "The area of the flat has a lot of night life. It is amazing!",
            rating = 5,
            date = "02/05/2021",
            tenancy_id = self.second_tenancy.id
        )

        self.third_review = Review( 
            comment = "The area has many vegan and garden produce stores. I loved that !!",
            rating = 3,
            date = "01/06/2021",
            tenancy_id = self.third_tenancy.id
        )

        db.session.add(self.first_review)
        db.session.add(self.second_review)
        db.session.add(self.third_review)
        db.session.commit()
        
#------------------------
#  Characteristic
#------------------------
    def create_seed_characteristic(self):
            self.first_characteristic = Characteristic(
                name = "worker",
                kind = "occupation"
            )
            self.second_characteristic = Characteristic(
                name = "student",
                kind = "occupation"
            )
            self.third_characteristic = Characteristic(
                name = "animal lover",
                kind = "interest"
            )
            self.fourth_characteristic = Characteristic(
                name = "dancer",
                kind = "interest"
            )
            self.fifth_characteristic = Characteristic(
                name = "vegan",
                kind = "interest"
            )
            
            db.session.add(self.first_characteristic)
            db.session.add(self.second_characteristic)
            db.session.add(self.third_characteristic)
            db.session.add(self.fourth_characteristic)
            db.session.add(self.fifth_characteristic)
            db.session.commit()  

#------------------------
#  characteristicUser
#------------------------
    def create_seed_characteristicUser(self):
        self.first_characteristicUser = CharacteristicUser(
            user_id = self.first_user.id,
            characteristic_id = self.first_characteristic.id
        )
        self.second_characteristicUser = CharacteristicUser(
            user_id = self.second_user.id,
            characteristic_id = self.second_characteristic.id
        )
        self.third_characteristicUser = CharacteristicUser(
            user_id = self.first_user.id,
            characteristic_id = self.third_characteristic.id
        )
        self.fourth_characteristicUser = CharacteristicUser(
            user_id = self.first_user.id,
            characteristic_id = self.fourth_characteristic.id
        )
        self.fifth_characteristicUser = CharacteristicUser(
            user_id = self.second_user.id,
            characteristic_id = self.fifth_characteristic.id
        )
        
        db.session.add(self.first_characteristicUser)
        db.session.add(self.second_characteristicUser)
        db.session.add(self.third_characteristicUser)
        db.session.add(self.fourth_characteristicUser)
        db.session.add(self.fifth_characteristicUser)
        db.session.commit() 

#------------------------
#  Language
#------------------------
    def create_seed_language(self):
        self.first_language = Language(
            name = "Spanish",
            locale = "es"
        )
        self.second_language = Language(
            name = "English",
            locale = "en"
        )
        self.third_language = Language(
            name = "French",
            locale = "fr"
        )
        
        db.session.add(self.first_language)
        db.session.add(self.second_language)
        db.session.add(self.third_language)
        db.session.commit() 

#------------------------
#  SpokenLanguages   ----->>>>> DA ERROR CON EL ID DEL IDIOMA
#------------------------
    def create_seed_spokenLanguages(self):
        self.first_spokenLanguages = SpokenLanguages(
            user_id = self.first_user.id,
            language_id = self.first_language.id
        )
        self.second_spokenLanguages = SpokenLanguages(
            user_id = self.first_user.id,
            language_id = self.second_language.id
        )
        self.third_spokenLanguages = SpokenLanguages(
            user_id = self.second_user.id,
            language_id = self.second_language.id
        )
        self.fourth_spokenLanguages = SpokenLanguages(
            user_id = self.third_user.id,
            language_id = self.third_language.id
        )
        
        db.session.add(self.first_spokenLanguages)
        db.session.add(self.second_spokenLanguages)
        db.session.add(self.third_spokenLanguages)
        db.session.add(self.fourth_spokenLanguages)
        db.session.commit()  

#------------------------
#  Expense
#------------------------
    def create_seed_expense(self):
        self.first_expense = Expense(
            name = "wifi"
        )
        self.second_expense = Expense(
            name = "light"
        )
        self.third_expense = Expense(
            name = "Water"
        )
        self.fourth_expense = Expense(
            name = "gas"
        )
        
        db.session.add(self.first_expense)
        db.session.add(self.second_expense)
        db.session.add(self.third_expense)
        db.session.add(self.fourth_expense)
        db.session.commit()

#------------------------
#  Expenses ROOM
#------------------------
    def create_seed_expensesRoom(self):
        self.first_expensesRoom = ExpensesRoom(
            room_id = self.first_room.id,
            expense_id = self.first_expense.id
        )
        self.second_expensesRoom = ExpensesRoom(
            room_id = self.first_room.id,
            expense_id = self.second_expense.id
        )
        self.third_expensesRoom = ExpensesRoom(
            room_id = self.first_room.id,
            expense_id = self.third_expense.id
        )
        self.fourth_expensesRoom = ExpensesRoom(
            room_id = self.first_room.id,
            expense_id = self.fourth_expense.id
        )
        
        db.session.add(self.first_expensesRoom)
        db.session.add(self.second_expensesRoom)
        db.session.add(self.third_expensesRoom)
        db.session.add(self.fourth_expensesRoom)
        db.session.commit()  
        
#------------------------
#  RoomArchive
#------------------------
    def create_seed_roomArchive(self):
        self.first_roomArchive = RoomArchive(
            url = "https://archzine.es/wp-content/uploads/2019/12/blanco-y-gris-decoracion-dormitorios-como-decorar-una-habitacion-peque%C3%B1a-guirnalda-de-bombillas-alfombra-color-gris.jpg",
            room_id = self.first_room.id
        )
        self.second_roomArchive = RoomArchive(
            url = "https://www.milideas.net/wp-content/uploads/ba%C3%B1o-peque%C3%B1o-moderno-bonito-22.jpg",
            room_id = self.first_room.id
        )
        self.third_roomArchive = RoomArchive(
            url = "https://www.elmueble.com/medio/2020/10/14/00449673_eaa6ff1e_600x600.jpg",
            room_id = self.first_room.id
        )
        self.fourth_roomArchive = RoomArchive(
            url = "https://tucasabonita.es/wp-content/uploads/2018/04/ideas-decorar-dormitorios-juveniles-modernos-chicas-29.jpg",
            room_id = self.second_room.id
        )
        self.fifth_roomArchive = RoomArchive(
            url = "https://casaydiseno.com/wp-content/uploads/2016/08/dormitorios-con-encanto-decoracion-pequeno-comodo.jpg",
            room_id = self.third_room.id
        )
        self.sixth_roomArchive = RoomArchive(
            url = "https://decoraideas.com/wp-content/uploads/2018/12/10_guetzli-2-768x768.jpg",
            room_id = self.fourth_room.id
        )
        self.seventh_roomArchive = RoomArchive(
            url = "https://2.bp.blogspot.com/-4OV19xVw0pw/WMa0mk2B3hI/AAAAAAAAevw/gCnN8PtgwLYj-zQh07bz94pOlAdFn0xYgCEw/s1600/ban%25CC%2583o%2Bestrecho.jpg",
            room_id = self.third_room.id
        )
        self.eighth_roomArchive = RoomArchive(
            url = "https://i.pinimg.com/originals/28/b2/a7/28b2a7bcda63e8fc1eb65631057c699a.jpg",
            room_id = self.second_room.id
        )
        
        db.session.add(self.first_roomArchive)
        db.session.add(self.second_roomArchive)
        db.session.add(self.third_roomArchive)
        db.session.add(self.fourth_roomArchive)
        db.session.add(self.fifth_roomArchive)
        db.session.add(self.sixth_roomArchive)
        db.session.add(self.seventh_roomArchive)
        db.session.add(self.eighth_roomArchive)
        db.session.commit() 
        
#------------------------
#  Feature
#------------------------
    def create_seed_feature(self):
        self.first_feature = Feature(
            name = "facing the street"
        )
        self.second_feature = Feature(
            name = "furnished room"
        )
        self.third_feature = Feature(
            name = "suite room"
        )
        self.fourth_feature = Feature(
            name = "shared room"
        )

        db.session.add(self.first_feature)
        db.session.add(self.second_feature)
        db.session.add(self.third_feature)
        db.session.add(self.fourth_feature)
        db.session.commit()  

#------------------------
#  FeaturesRoom
#------------------------
    def create_seed_featuresRoom(self):
        self.first_featuresRoom = FeaturesRoom(
            room_id = self.first_room.id,
            feature_id = self.first_feature.id
        )
        self.second_featuresRoom = FeaturesRoom(
            room_id = self.second_room.id,
            feature_id = self.second_feature.id
        )
        self.third_featuresRoom = FeaturesRoom(
            room_id = self.third_room.id,
            feature_id = self.third_feature.id
        )
        self.fourth_featuresRoom = FeaturesRoom(
            room_id = self.fourth_room.id,
            feature_id = self.fourth_feature.id
        )

        db.session.add(self.first_featuresRoom)
        db.session.add(self.second_featuresRoom)
        db.session.add(self.third_featuresRoom)
        db.session.add(self.fourth_featuresRoom)
        db.session.commit()          
                                          
       
    def create_seed_data(self):
        self.create_seed_country()
        self.create_seed_city()
        self.create_seed_user()
        #self.create_seed_favorites() ----->>> Cuando es 1 favorito muchas habitaciones
        self.create_seed_room()
        self.create_seed_favorites() # ---->>> 1 habitación muchos favoritos
        self.create_seed_tenancy()
        self.create_seed_review()
        self.create_seed_characteristic()
        self.create_seed_characteristicUser()
        self.create_seed_language()
        self.create_seed_spokenLanguages()
        self.create_seed_expense()
        self.create_seed_expensesRoom()
        self.create_seed_roomArchive()
        self.create_seed_feature()
        self.create_seed_featuresRoom()
       
        
    

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
