import random
import string
from ariadne import QueryType

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

    population = {
        'Hamburg': 1822445,
        'Bamberg': 75743,
        'Cleveland': 385525,
        'Odense': 200703,
        'Osaka': 2668586,
        'Luebeck': 217198,
        'Singapore': 5638700
    }

    data = [{
        'city': k,
        'population': v
    } for k, v in population.items()]

    return data
