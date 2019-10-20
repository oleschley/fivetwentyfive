import random
import string
from ariadne import QueryType

query = QueryType()

@query.field('bars')
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
