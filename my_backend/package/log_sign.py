from flask import Blueprint, request, jsonify
from .models import User, db
from werkzeug.security import generate_password_hash, check_password_hash


log_sign = Blueprint('log_sign', __name__)


@log_sign.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == "POST":
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        db_user = User.query.filter_by(email=email).first()
        if db_user == None:
            new_user = User(uname=username, email=email,
                            password=generate_password_hash(password, method="MD5"))
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": "User created successfully!"}), 201
        else:
            return jsonify({"message": f"User with Email Id '{email}' already exists!"}), 409
    print("Testing.....")
    
    return "<h1> SignUp page</h1>"


@log_sign.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == "POST":
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        db_user = User.query.filter_by(email=email).first()
        if db_user:
            if check_password_hash(db_user.password, password):
                return jsonify({"message": "LoggedIn successfully!"}), 201
            return jsonify({"message": "Wrong Password!"}), 401
        else:
            return jsonify({"message": f"User with Email Id {email} does not  exists!"}), 404
    return "<h1> Login page</h1>"


@log_sign.route('/logout')
def logout():
    return "<h1> Logout page</h1>"
