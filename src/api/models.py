from flask_sqlalchemy import SQLAlchemy
# to check the password
from werkzeug.security import safe_str_cmp

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
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)

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
            "is_active": self.is_active
        }
        
    # method to check the password and that verify that it is the user password
    def check_password(self, password_param):
       return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))