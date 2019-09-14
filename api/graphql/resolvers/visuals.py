import random
from ariadne import QueryType

from api.data import categorical

query = QueryType()

@query.field('scatter')
def scatter(*_):
    data = [{
        'x': random.random() * 500,
        'y': random.random() * 500,
        'radius': random.random() * (20 - 5) + 5,
        'color': random.choice(['steelblue', 'orange', 'firebrick'])
    } for i in range(100)]

    return data

@query.field('bar')
def bar(*_):
    return categorical.bars

# @query.field('gapminder')
# def gapminder():
#     data = gapminder.find({'continent': 'asia', 'year': {'$gt': 2000}}, {'_id': 0})
#     return json_util.dumps(data)
