"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import cloudinary;
import cloudinary.uploader;
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, SeedData, Room
#from api.models import db, User, Room
from api.utils import generate_sitemap, APIException
# to make the token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash



api = Blueprint('api', __name__)
# ----------- Upload Photo User ---------------------------------
@api.route('/user/<int:user_id>/avatar_url', methods=['PUT', 'POST'])
def handle_upload(user_id):
    if 'avatar_url' in request.files:
        result = cloudinary.uploader.upload(request.files['avatar_url'])
        user1 = User.query.filter_by(user_id="user").first()
        print("test")
        print("user")
        print(user1.avatar_url, "å########")
        user1.avatar_url = result['secure_url']     
        print(result['secure_url'],"@@@@@@@@@@@")
        db.session.add(user1)
        db.session.commit()

        return jsonify(user1.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

#________________________________________________________________________

@api.route('/sign_up', methods=['POST'])
def sign_up_user():
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    name_request = body_request.get("name", None)
    password_request = body_request.get("password", None)
    
    new_user = User(
        email = email_request, 
        name = name_request, 
        password = generate_password_hash(password_request, "sha256")
        )
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify(body_request), 200

@api.route('/login', methods=['POST'])
def login_user():
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    password_request = body_request.get("password", None)
    password_hash = generate_password_hash(password_request, "sha256")
    # to check the user existence
    if email_request == None or password_request == None:
        return jsonify({"msg": "Bad email or password"}), 401
    
    user_checked = User.query.filter_by(email = email_request).one_or_none()
    # to check email and contraseña
    if not user_checked or check_password_hash(password_hash, "wrong-passw@rd"):
        return jsonify("Your credentials are wrong, please try again"), 401
    
    # New token
    access_token = create_access_token(identity = user_checked.serialize())

    return jsonify({"access_token": access_token, "user": user_checked.serialize()}), 200

# ----------- to verify the identity of the user ----------
# IN this route is where the token is neccessary to access. Postman --> "Authorization" or "Header"
@api.route("/profile", methods=["GET", "PUT"])
@jwt_required()
def user_profile():
  identity = get_jwt_identity()
  user = current_user(get_jwt_identity())

  return jsonify(user.serialize())

# ----------- to verify the identity of the user ----------
def current_user(identity):
  print(identity["id"])
  return User.query.get(identity["id"])


@api.route('/users', methods=['GET'])
def get_users():
    list_users = []
    users_list_in_DB = User.query.all()
    
    for user in users_list_in_DB:
        list_users.append(user.serialize())
    
    return jsonify(list_users), 200

@api.route('/profile/<int:user_id>', methods=['GET']) # EN POSTMAN FUNCIONA
def get_single_user(user_id):
    body = request.get_json()
    user_selected = User.query.get(user_id)
    
    rooms_user = user_selected.rooms
    user = user_selected.serialize()
    rooms = []
    
    for room in rooms_user:
        # Para obtener la relación entre habitación y ciudad y que salgan en Postman
        city = room.city.serialize()
        room_res = room.serialize()
        
        # Añadir al Objeto "room_res" la propiedad "city"
        room_res['city'] = city
        rooms.append(room_res)
    
    characteristic_user = user_selected.characteristic
    user = user_selected.serialize()
    characteristics = []
    
    for characteristic in characteristic_user:
        characteristic_res = characteristic.serialize()
        characteristics.append(characteristic_res)
    
    language_user = user_selected.language
    user = user_selected.serialize()
    languages = []
    
    for language in language_user:
        language_res = language.serialize()
        languages.append(language_res)
        
    tenancies_user = user_selected.tenancies
    user = user_selected.serialize()
    tenancies = []
    
    for tenancies in tenancies_user:
        tenancies_res = tenancies.serialize()
        tenancies.append(tenancies_res)
     
    # Añadir al Objeto "user" la propiedad "rooms" para que salgan las habitaciones del usuario
    user['rooms'] = rooms   
    # Añadir al Objeto "user" la propiedad "characteristic" para que salga en el usuario
    user['characteristics'] = characteristics
    # Añadir al Objeto "user" la propiedad "language" para que salga en el usuario
    user['languages'] = languages
    # Añadir al Objeto "user" la propiedad "tenancies" para que salga en el usuario
    user['tenancies'] = tenancies
    
    return jsonify(user), 200

@api.route('/', methods=['GET'])
def get_rooms():
    rooms_list = []
    rooms_list_in_DB = Room.query.all()
    
    for room in rooms_list_in_DB:
        rooms_list.append(room.serialize())
    
    return jsonify(rooms_list), 200

@api.route('/detailedView/<int:room_id>', methods=['GET']) # EN POSTMAN FUNCIONA
def get_single_room(room_id):
    body = request.get_json()
    room_selected = Room.query.get(room_id)
    return jsonify(room_selected.serialize()), 200

# -----------
@api.route('/edit_profile/<int:user_id>', methods=['PATCH']) # NO FUNCIONA !!!!
def edit_profile(user_id):
    body_request = request.get_json() # ----------- recoge datos para el body ---------
    user_to_edit = User.query.get_or_404(user_id) # ----------- hace referencia al usuario a editar ---------
    
    for key in body_request:  # ----------- recibo array de objetos--
        
        if key == body_request[key]:    # -----------si extiste , sustituye ---------
            user_to_edit[key] = body_request[key] # ----------- hacer dinamica. ---------
            print("body_request[key] ---------------------------------- ", body_request[key])
            print("user_to_edit[key] ---------------------------------- ", user_to_edit[key])
    
    db.session.commit()
    
    print("body_request *********************** ", body_request)
    
    return jsonify(body_request), 200


# -------------------------- SEED -------------------------

@api.route('/seed_data', methods=['GET'])
def handle_seed_user_data():
    seeder = SeedData()
    seeder.create_seed_data()

    return jsonify({"msg": "The user was created!" }), 200