import os

from starlette.applications import Starlette
from ariadne import load_schema_from_path, make_executable_schema
from ariadne.asgi import GraphQL

from api.graphql.resolvers import all_resolvers
from api.graphql.mutations import all_mutations

type_defs = load_schema_from_path('/api/graphql/schema')

schema = make_executable_schema(type_defs, [*all_resolvers, *all_mutations])

app = Starlette(debug=True)
app.mount('/graphql', GraphQL(schema, debug=True))
