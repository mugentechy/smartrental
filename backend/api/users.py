from flask import request, url_for,jsonify,json,Blueprint,render_template
import requests
from api import db,mail
from werkzeug.security import check_password_hash
from flask_mail import Message
from api.models import *
from api.auth import create_auth_token
import os

users = Blueprint('users', __name__)

@users.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    print(data)
    if not data:
        return jsonify({'msg': 'Missing JSON'}), 400

    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'user created successfully'})


@users.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'msg': 'Missing JSON'}), 400

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Invalid credentials'}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'Invalid email'}), 401

    if not user.verify_password(password):
        return jsonify({'error': 'Invalid password'}), 401

    # User is authenticated, return success response
    token = create_auth_token(user.id)
    return jsonify({'message': 'Login successful', 'user': user.id,'token': token}), 200
 


@users.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.filter_by(id=id).first()
    if user is not None:
        print(user)
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'message': 'User not found'}), 404




@users.route('/contact', methods=['POST'])
def contact():
    try:
        # Parse and validate incoming JSON data
        data = request.get_json()
        if not data:
            return jsonify({'msg': 'Invalid input, no JSON data provided'}), 400
        
        # Extract required fields
        email = data.get('email')
        fname = data.get('fname')
        lname = data.get('lname')
        phone = data.get('phone')
        message = data.get('message')

        # Check if mandatory fields are provided
        if not email or not fname or not lname or not phone or not message:
            return jsonify({'msg': 'Missing required fields'}), 400

        # Construct the email message
        subject = "Thank You for Contacting Us"
        email_body = (
            f"Dear {fname} {lname},\n\n"
            f"Thank you for reaching out to us.\n\n"
            f"We have received your message:\n\n"
            f"\"{message}\"\n\n"
            f"One of our team members will contact you soon at {phone}.\n\n"
            "Best regards,\nDiani Konnect"
        )

        # Send the email
        send_msg = Message(
            subject,
            sender=os.getenv('MAIL_USERNAME'),
            recipients=[email]
        )
        send_msg.body = email_body
        mail.send(send_msg)

        # Respond to the user
        return jsonify({'message': 'Thank you for contacting us. We have sent a confirmation email to your address.'}), 200

    except Exception as e:
        # Handle unexpected errors
        return jsonify({'msg': 'An error occurred while processing your request', 'error': str(e)}), 500



@users.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'msg': 'Missing JSON'}), 400



    msg = "Thank you for subscribing."
    send_msg = Message(msg,sender=os.getenv('MAIL_USERNAME'),recipients=[email])
    send_msg.html = render_template('mail.html')
    mail.send(send_msg)


   
    return jsonify({'message': 'Thank you for subscribing'}), 200
 
