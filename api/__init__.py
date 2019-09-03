import os

from flask import Flask
from flask_cors import CORS

from api.routes import visuals

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.update(
        SECRET_KEY='dev'
    )

    CORS(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass


    # a simple page that says hello
    @app.route('/')
    def hello():
        return 'No one home...'

    # add blueprints
    app.register_blueprint(visuals.bp, url_prefix='/visuals')

    return app
