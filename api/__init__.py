import os

from ariadne import (
    graphql_sync,
    load_schema_from_path,
    make_executable_schema
)

from flask import Flask, request, jsonify
from flask_cors import CORS

from api.graphql.resolvers import blog, greeting, visuals


type_defs = load_schema_from_path("/api/graphql/")
resolvers = [blog.query, greeting.query, visuals.query]

schema = make_executable_schema(type_defs, resolvers)


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

    # Home route
    @app.route('/')
    def hello():
        return 'No one home...'

    @app.route("/graphql", methods=["POST"])
    def graphql_server():
        # GraphQL queries are always sent as POST
        data = request.get_json()

        # Note: Passing the request to the context is optional.
        # In Flask, the current request is always accessible as flask.request
        success, result = graphql_sync(
            schema,
            data,
            context_value=request,
            debug=app.debug
        )

        status_code = 200 if success else 400
        return jsonify(result), status_code

    return app
