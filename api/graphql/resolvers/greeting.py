from ariadne import QueryType

query = QueryType()

@query.field('greeting')
def resolve_greeting(*_, name=None):
    if name:
        return f'Hello {name}'
    return 'Helllloooo!'