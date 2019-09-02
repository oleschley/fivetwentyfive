import random

from bson import json_util
from flask import Blueprint, jsonify

from api.models.visuals import categorical_dummy

bp = Blueprint('visuals', __name__)

# @visuals.route('/bar')
# def bar_chart():
#     data = categorical_dummy.find()
#     return json_util.dumps(data)

@bp.route('/scatter')
def scatter_plot():
    data = [{
        'x': random.random() * 500,
        'y': random.random() * 500,
        'radius': random.random() * (20 - 5) + 5,
        'color': random.choice(['steelblue', 'orange', 'firebrick'])
    } for i in range(100)]

    return jsonify(data)

# @visuals.route('/gapminder')
# def gapminder_viz():
#     data = gapminder.find({'continent': 'asia', 'year': {'$gt': 2000}}, {'_id': 0})
#     return json_util.dumps(data)
