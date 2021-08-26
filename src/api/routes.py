"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import cloudinary;
import cloudinary.uploader;
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, SeedData, Room, City, Expense, Feature
#from api.models import db, User, Room
from api.utils import generate_sitemap, APIException
# to make the token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash


api = Blueprint('api', __name__)

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
    
    rooms_user = user_selected.rooms # -- "rooms" is a relationship in the table User
    user = user_selected.serialize()
    rooms = []
    
    for room in rooms_user:
        room_res = room.serialize()
        rooms.append(room_res)
    
    characteristic_user = user_selected.characteristic  # -- "characteristic" is a relationship in the table User
    user = user_selected.serialize()
    characteristics = []
    
    for characteristic in characteristic_user:
        characteristic_res = characteristic.serialize()
        characteristics.append(characteristic_res)
    
    language_user = user_selected.language # -- "language" is a relationship in the table User
    user = user_selected.serialize()
    languages = []
    
    for language in language_user:
        language_res = language.serialize()
        languages.append(language_res)
        
    tenancies_user = user_selected.tenancies # -- "tenancies" is a relationship in the table User
    user = user_selected.serialize()
    tenancies_list = []
    
    for tenancy in tenancies_user:
        tenancies_res = tenancy.serialize()
        tenancies_list.append(tenancies_res)
     
    # Añadir al Objeto "user" la propiedad "rooms" para que salgan las habitaciones del usuario
    user['rooms'] = rooms   
    # Añadir al Objeto "user" la propiedad "characteristic" para que salga en el usuario
    user['characteristics'] = characteristics
    # Añadir al Objeto "user" la propiedad "language" para que salga en el usuario
    user['languages'] = languages
    # Añadir al Objeto "user" la propiedad "tenancies" para que salga en el usuario
    user['tenancies'] = tenancies_list
    
    return jsonify(user), 200

@api.route('/', methods=['GET']) # LISTA DE TODAS LAS HABITACIONES
def get_rooms():
    rooms_list = []
    rooms_list_in_DB = Room.query.all()
    
    for room in rooms_list_in_DB:
        rooms_list.append(room.serialize())
    
    return jsonify(rooms_list), 200

@api.route('/detailed_room/<int:room_id>', methods=['GET']) # EN POSTMAN FUNCIONA
def get_single_room(room_id):
    body = request.get_json()
    room_selected = Room.query.get(room_id)
    
    tenancies_room = room_selected.tenancies
    room = room_selected.serialize()
    tenancies_list = []
    
    for tenancy in tenancies_room:
        tenancy_res = tenancy.serialize()
        tenancies_list.append(tenancy_res)
        
    room_archive_room = room_selected.room_archive
    room = room_selected.serialize()
    room_archives = []
    
    for room_archive in room_archive_room:
        room_archive_res = room_archive.serialize()
        room_archives.append(room_archive_res)
    
    expense_room = room_selected.expense
    room = room_selected.serialize()
    expensives = []
    
    for expensive in expense_room:
        expensive_res = expensive.serialize()
        expensives.append(expensive_res)
    
    feature_room = room_selected.feature
    room = room_selected.serialize()
    features = []
    
    for feature in feature_room:
        feature_res = feature.serialize()
        features.append(feature_res)
    
    room['tenancies'] = tenancies_list
    room['room_archives'] = room_archives
    room['expensives'] = expensives
    room['features'] = features
    
    return jsonify(room), 200


@api.route('/edit_profile/<int:user_id>', methods=['PATCH']) # En consola sale el cambio !!!!
def edit_profile(user_id):
    body_request = request.get_json()
    user_to_edit = User.query.get_or_404(user_id)
    
    for key in body_request:
        
        if key == body_request[key]:
            user_to_edit[key] = body_request[key]
            print("body_request[key] ----- ", body_request[key])
            print("user_to_edit[key] ----- ", user_to_edit[key])
    
    db.session.commit()
    
    print("body_request *********************** ", body_request)
    
    return jsonify(body_request), 200

@api.route('/new_announcement', methods=['POST'])
def create_announcement():
    body_request = request.get_json()
    print("acá están los parámetros")
    print(body_request)
    city_request = body_request.get("city", None)
    address_request = body_request.get("address", None)
    title_request = body_request.get("title", None)
    description_request = body_request.get("description", None)
    price_request = body_request.get("price", None)
    deposit_request = body_request.get("deposit", None)
    facingTheStreet_request = body_request.get("facingTheStreet", None)
    furnishedRoom_request = body_request.get("furnishedRoom", None)
    suiteRoom_request = body_request.get("suiteRoom", None)
    sharedRoom_request = body_request.get("sharedRoom", None)
    expWiFi_request = body_request.get("expWiFi", None)
    expGas_request = body_request.get("expGas", None)
    expElectricity_request = body_request.get("expElectricity", None)
    expWater_request = body_request.get("expWater", None)
    type_bed_request = body_request.get("type_bed", None)
    # singleBed_request = body_request.get("singleBed", None)
    # doubleBed_request = body_request.get("doubleBed", None)
    # sofaBed_request = body_request.get("sofaBed", None)
    # noBed_request = body_request.get("noBed", None)

    city_room= City(
        name = city_request
    )
    expense_room= Expense(
        name = expWater_request
    )
    expense2_room= Expense(
        name = expWiFi_request
    )
    expense3_room= Expense(
        name = expElectricity_request
    )
    expense4_room= Expense(
        name = expGas_request
    )

    feature1_room= Feature(
        name=facingTheStreet_request
    )
    feature2_room= Feature(
        name=furnishedRoom_request
    )
    feature3_room= Feature(
        name=suiteRoom_request
    )
    feature4_room= Feature(
        name=sharedRoom_request
    )



    new_room = Room(
        address = address_request, 
        title = title_request, 
        description = description_request,
        price = price_request,
        deposit = deposit_request,
        # facingTheStreet = facingTheStreet_request,
        # furnishedRoom = furnishedRoom_request,
        # suiteRoom = suiteRoom_request,
        # sharedRoom = sharedRoom_request,
        type_bed = type_bed_request
        )
    
    db.session.add(city_room)
    db.session.add(new_room)
    db.session.add(feature1_room)
    db.session.add(feature2_room)
    db.session.add(feature3_room)
    db.session.add(feature4_room)
    db.session.add(expense_room)
    db.session.add(expense2_room)
    db.session.add(expense3_room)
    db.session.add(expense4_room)
    db.session.commit()

    return jsonify(body_request), 200


# -------------------------- SEED -------------------------

@api.route('/seed_data', methods=['GET'])
def handle_seed_user_data():
    seeder = SeedData()
    seeder.create_seed_data()

    return jsonify({"msg": "The user was created!" }), 200