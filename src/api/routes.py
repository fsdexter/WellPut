"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, SeedData, Room, City, Expense, Feature, Review, Tenancy, Characteristic, CharacteristicUser, Language, SpokenLanguages
#from api.models import db, User, Room
from api.utils import generate_sitemap, APIException
# to make the token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from datetime import date
import cloudinary;
import cloudinary.uploader

api = Blueprint('api', __name__)
# ----------- Upload Photo User ---------------------------------
@api.route('/user/<int:user_id>/image', methods=['POST'])
def handle_upload(user_id):
    
    print("SE LLAMÓ A LA FUNCIÓN DE SUBIR FOTO???")
    
    if 'avatar_url' in request.files:
        result = cloudinary.uploader.upload(request.files['avatar_url'])
        user1 = User.query.get(user_id) 
        user1.avatar_url = result['secure_url']    
       
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
    last_name_request = body_request.get("last_name", None)
    password_request = body_request.get("password", None)
    
    new_user = User(
        email = email_request, 
        name = name_request,
        last_name = last_name_request, 
        password = generate_password_hash(password_request, "sha256")
        )
    
    db.session.add(new_user)
    db.session.commit()
    
    new_user_DB = User.query.filter(User.email == email_request).first()
    
    return jsonify(new_user_DB.serialize()), 200

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
    user = user_selected.serialize()
    
    city = City.query.filter(City.id == User.city_id).first()
    city_user = [city.serialize()]
    # To add to "user" object the "city" property to appear inside the user
    user['city'] = city_user
    
    return jsonify(user), 200

@api.route('/rooms', methods=['GET']) # ALL ROOMS LIST
def get_rooms():
    rooms = Room.query.all()
    return jsonify(list(map(lambda room: room.serialize(), rooms))), 200
       
@api.route('/detailed_room/<int:room_id>', methods=['GET'])
def get_single_room(room_id):
    room_selected = Room.query.get(room_id)
    room_seralize = room_selected.serialize()
    
    reviews_room = room_selected.reviews
    reviews_list = []
    
    for review in reviews_room:
        tenancy_review = review.tenancy
        
        user = User.query.filter(User.id == tenancy_review.user_id).first()
        
        user_tenancy = [user.serialize()]
        tenancy_review_serialize = tenancy_review.serialize()
        tenancy_review_serialize['user'] = user_tenancy        
        reviews_list.append(tenancy_review_serialize)
        
    room_seralize['tenancies'] = reviews_list #Realmente se sacan las tenancies, la relación entre usuario, comentario y habitación
    return jsonify(room_seralize), 200
    
    

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
        occupation = user_to_edit["occupation"],
        id = user_to_edit["id"],
        last_name = user_to_edit["last_name"],
        name = user_to_edit["name"],
        password = generate_password_hash(user_to_edit["password"], "sha256"),
        phone = user_to_edit["phone"]
    )
    
    db.session.add(new_user)
    db.session.commit()
    
    for interest in user_to_edit["interests"]:
        interest_front = Characteristic.query.filter(Characteristic.name == interest).first()
        user_interest = interest_front.serialize()
        
        new_characteritic_user = CharacteristicUser(
            user_id = user_to_edit["id"],
            characteristic_id = user_interest["id"]
        )
        
        db.session.add(new_characteritic_user)
        db.session.commit()
        
    for language in user_to_edit["languages"]:
        language_front = Language.query.filter(Language.name == language).first()
        user_language = language_front.serialize()
        
        new_language_user = SpokenLanguages(
            user_id = user_to_edit["id"],
            language_id = user_language["id"]
        )
        
        db.session.add(new_language_user)
        db.session.commit()
    
    return jsonify(user_to_edit), 200

    # -------------------------- TEST -------------------------
@api.route('/upload', methods=['POST'])
def handle_pic ():
      
        result = cloudinary.uploader.upload(request.files["profile_image"])
        print(result["url"])
        return jsonify({"url":result["url"]} ), 200
    # -------------------------- TEST -------------------------

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
    room_url_request = body_request.get("room_url", None)
    #agregando foto de room
    # room_cloudinary = cloudinary.uploader.upload(body_request.get("room_url"), folder = "agile_monkeys")
    # room_image_url_request = room_image_url["secure_url"]

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
        type_bed = type_bed_request,
        room_url =  room_url_request
        # room_image_url = room_image_url_request 
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

@api.route('/tenancy_room_reviews', methods=['POST'])
def reviewendp():
    body_request = request.get_json()
    review=Review(
        comment=body_request["comment"], 
        rating=body_request["rating"], 
        date=date.today(), 
        room_id=body_request["room_id"], 
        tenancy_id=body_request["user"])
    
    db.session.add(review)
    db.session.commit()
    return jsonify({"review": review.serialize()}), 200

@api.route('/tenancy_room_reviews/<int:room_id>', methods=['GET']) 
def get_reviews_room(room_id):
    
    tenancies_room_selected = Tenancy.query.filter(Tenancy.room_id == room_id).all()
    
    tenancies_list = []
    
    for tenancy_room_selected in tenancies_room_selected:
        
        tenancy_reviews = tenancy_room_selected.reviews
        tenancy = tenancy_room_selected.serialize()
        reviews_list = []
        
        for review in tenancy_reviews:
            review_res = review.serialize()
            reviews_list.append(review_res)
            
        tenancy_users = User.query.filter(User.id == tenancy_room_selected.user_id).all()
       
        for user in tenancy_users:
            tenancy_user = user.serialize()
        
        room = Room.query.filter(Room.id == Tenancy.room_id).first()
        room_tenancy = [room.serialize()]
        
        tenancy['reviews'] = reviews_list
        tenancy['user'] = tenancy_user
        tenancy['room'] = room_tenancy
        
        tenancies_list.append(tenancy)
        
    return jsonify(tenancies_list), 200  
    

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
    print(body_request)
    queries = []
    if body_request["country"]:
        queries.append(Room.country == body_request["country"])
    if body_request["typeBed"]:
        queries.append(Room.type_bed == body_request["typeBed"])
    if body_request["city"]:
        queries.append(Room.city == body_request["city"])
    if body_request["roomies"]:
        print(roomies)
    if body_request["filters"]:
        print(filters)
    if body_request["rating"]:
        print(rating)
    if body_request["money"]:
        print(money)
    if body_request["interests"]:
        print(interests)
#   

#   if body_request["kye del flux"]:
#         for
#        queries.append(Room.type_bed == body_request["key"])
    
    search_filter = Room.query.filter(*queries).all()
    response = list(map(lambda room: room.serialize(),search_filter))
    print(response)
    return "OK",200