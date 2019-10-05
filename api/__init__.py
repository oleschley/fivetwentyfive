import os

from starlette.applications import Starlette

from ariadne import (
    load_schema_from_path,
    make_executable_schema,
)
from ariadne.asgi import GraphQL

from api.graphql.resolvers import blog, greeting, visuals

type_defs = load_schema_from_path('/api/graphql/')
resolvers = [blog.query, greeting.query, visuals.query]
schema = make_executable_schema(type_defs, resolvers)

app = Starlette(debug=True)
app.mount('/graphql', GraphQL(schema, debug=True))
