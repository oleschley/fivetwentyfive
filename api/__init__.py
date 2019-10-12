import os

from starlette.applications import Starlette
from starlette.middleware.cors import CORSMiddleware
from ariadne import load_schema_from_path, make_executable_schema
from ariadne.asgi import GraphQL

from api.graphql.resolvers import all_resolvers

type_defs = load_schema_from_path('/api/graphql/schema')

schema = make_executable_schema(type_defs, all_resolvers)

app = Starlette(debug=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_headers=['*'],
    allow_methods=['*']
)
app.mount('/graphql', GraphQL(schema, debug=True))
