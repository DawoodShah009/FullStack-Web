from genericpath import exists
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path


db = SQLAlchemy()
DB_NAME = "my_database.db"


def setup():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'xdfxfds@3bfdg%$**tyr6dhdhd~##DGHdyhs@$44'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    
    
    from .views import views
    from .log_sign import log_sign



    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(log_sign, url_prefix='/')
    
    from .models import User
    
    create_db(app)
    
    return app
    
def create_db(app):
    if not path.exists('package/' + DB_NAME):
        with app.app_context():
            db.create_all()
            print("My Database has been created!")