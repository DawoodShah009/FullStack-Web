from . import db
from flask_login import UserMixin
# from  sqlalchemy.sql import func

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    uname = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True)
    password = db.Column(db.String(200))
    # date = db.Column(db.DateTime(timezone=True), default=func.now)
    
    