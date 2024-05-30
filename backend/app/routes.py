from flask import Blueprint, request, jsonify
from app import db, jwt
from app.models import User, Property, Favorite
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

bp = Blueprint('routes', __name__)

@bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        username=data['username'],
        email=data['email'],
    )
    new_user.set_password(data['password'])
    db.session.add(new_user.db.session.commit())
    return jsonify({'message': 'User created successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.user_id)
        return jsonify(access_token=access_token)
    return jsonify({'message': 'Invalid credentials'}), 401

@bp.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([prop.to_dict() for prop in properties])

@bp.route('/properties/<int:id>', methods=['GET'])
def get_property(id):
    property = Property.query.get_or_404(id)
    return jsonify(property.to_dict())

@bp.route('/favorites', methods=['POST'])
@jwt_required()
def add_favorite():
    user_id = get_jwt_identity()
    data = request.get_json()
    favorite = Favorite(user_id=user_id, property_id=data['property_id'])
    db.session.add(favorite)
    db.session.commit()
    return jsonify({'message': 'Favorite added successfully'}), 201

@bp.route('/favorites/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_favorite(id):
    user_id = get_jwt_identity()
    favorite = Favorite.query.filter_by(user_id=user_id, property_id=id).first_or_404()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify({'message': 'Favorite deleted successfully'}), 200
