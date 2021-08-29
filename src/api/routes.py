"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import cloudinary;
import cloudinary.uploader;
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, SeedData, Room, City, Expense, Feature, Review, Tenancy
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
  return User.query.get(identity["id"])


@api.route('/users', methods=['GET'])
def get_users():
    list_users = []
    users_list_in_DB = User.query.all()
    
    for user in users_list_in_DB:
        list_users.append(user.serialize())
    
    return jsonify(list_users), 200

@api.route('/profile/<int:user_id>', methods=['GET'])
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
    
    city = City.query.filter(City.id == User.city_id).first()
    city_user = [city.serialize()]

    favorites_user = user_selected.favorites # -- "favorites" is a relationship in the table User
    user = user_selected.serialize()
    favorites_list = []
    
    for favorite in favorites_user:
        favorite_res = favorite.serialize()
        favorites_list.append(favorite_res)

     
    # To add to "user" object the "rooms" property to appear inside the user
    user['rooms'] = rooms   
    # To add to "user" object the "characteristic" property to appear inside the user
    user['characteristics'] = characteristics
    # To add to "user" object the "language" property to appear inside the user
    user['languages'] = languages
    # Añadir al Objeto "user" la propiedad "favorites" para que salga en el usuario
    user['favorites'] = favorites_list
    # To add to "user" object the "tenancies" property to appear inside the user
    user['tenancies'] = tenancies_list
    # To add to "user" object the "city" property to appear inside the user
    user['city'] = city_user
 
    return jsonify(user), 200

@api.route('/', methods=['GET']) # ALL ROOMS LIST
def get_rooms():
    rooms_list = []
    rooms_list_in_DB = Room.query.all()
    
    for room in rooms_list_in_DB:
        rooms_list.append(room.serialize())
    
    return jsonify(rooms_list), 200

@api.route('/detailed_room/<int:room_id>', methods=['GET'])
def get_single_room(room_id):
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
    
    city = City.query.filter(City.id == Room.city_id).first()
    city_room = [city.serialize()]
    
    room['tenancies'] = tenancies_list
    room['room_archives'] = room_archives
    room['expensives'] = expensives
    room['features'] = features
    room['city'] = city_room
    
    return jsonify(room), 200


@api.route('/edit_profile/<int:user_id>', methods=['PATCH']) # FUNCIONA !!!!
def edit_profile(user_id):
    body_request = request.get_json()
    user_selected = User.query.get_or_404(user_id)
    user_to_edit = user_selected.serialize()
    
    db.session.delete(user_selected)
    db.session.commit()
    
    for param in body_request:
        user_to_edit[param] = body_request[param]
        
    new_user = User(
        avatar_url = user_to_edit["avatar_url"],
        birthday = user_to_edit["birthday"],
        city_id = user_to_edit["city_id"],
        description = user_to_edit["description"],
        email = user_to_edit["email"],
        gender = user_to_edit["gender"],
        id = user_to_edit["id"],
        last_name = user_to_edit["last_name"],
        name = user_to_edit["name"],
        password = generate_password_hash(user_to_edit["password"], "sha256"),
        phone = user_to_edit["phone"]
    )
    
    db.session.add(new_user)
    db.session.commit()
     
    return jsonify(user_to_edit), 200

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


@api.route('/tenancy_room_reviews/<int:room_id>', methods=['GET']) #FUNCIONA!!
def get_reviews_room(room_id):
    
    #tenancy_room_selected = Tenancy.query.filter(Tenancy.room_id == room_id).first()
    tenancies_room_selected = Tenancy.query.filter(Tenancy.room_id == room_id).all()
    print("TENANCIES ???? --- ", tenancies_room_selected)
    
    tenancies_list = []
    
    for tenancy_room_selected in tenancies_room_selected:
        print("TENANCY ???? --- ", tenancy_room_selected)
        
        tenancy_reviews = tenancy_room_selected.reviews
        tenancy = tenancy_room_selected.serialize()
        reviews_list = []
        
        for review in tenancy_reviews:
            review_res = review.serialize()
            reviews_list.append(review_res)
            
        user = User.query.filter(User.id == Tenancy.user_id).first()
        user_tenancy = [user.serialize()]
        
        room = Room.query.filter(Room.id == Tenancy.room_id).first()
        room_tenancy = [room.serialize()]
        
        tenancy['reviews'] = reviews_list
        tenancy['user'] = user_tenancy
        tenancy['room'] = room_tenancy
        
        tenancies_list.append(tenancy)
        
    return jsonify(tenancies_list), 200  
    
    # tenancy_reviews = tenancy_room_selected.reviews
    # tenancy = tenancy_room_selected.serialize()
    # reviews_list = []
    
    # for review in tenancy_reviews:
    #     review_res = review.serialize()
    #     reviews_list.append(review_res)
        
    # user = User.query.filter(User.id == Tenancy.user_id).first()
    # user_tenancy = [user.serialize()]
    
    # room = Room.query.filter(Room.id == Tenancy.room_id).first()
    # room_tenancy = [room.serialize()]
    
    # tenancy['reviews'] = reviews_list
    # tenancy['user'] = user_tenancy
    # tenancy['room'] = room_tenancy
    
    # return jsonify([tenancy]), 200  

# -------------------------- SEED -------------------------

@api.route('/seed_data', methods=['GET'])
def handle_seed_user_data():
    seeder = SeedData()
    seeder.create_seed_data()

    return jsonify({"msg": "The data was created!" }), 200

# -------------------------- search room -------------------------
@api.route('/search_room', methods=['POST'])
def search_room():
    body_request = request.get_json()
    queries = [X.y == 'a']
    if b:
        queries.append(X.z == 'b')
        q.filter(*queries)
    return "OK",200