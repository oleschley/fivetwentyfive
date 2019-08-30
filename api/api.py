
import random
from bson import json_util
from flask import Flask, jsonify
from flask_cors import CORS
from models.visuals import categorical_dummy
# from models.visuals import gapminder
app = Flask(__name__)
CORS(app)

@app.route('/')
def landing():
    return 'No one home.'

@app.route('/data/visuals/bar')
def bar_chart():
    data = categorical_dummy.find()
    return json_util.dumps(data)

# @app.route('/data/visuals/gapminder')
# def gapminder_viz():
#     data = gapminder.find({'continent': 'asia', 'year': {'$gt': 2000}}, {'_id': 0})
#     return json_util.dumps(data)

@app.route('/data/visuals/scatter')
def scatter_plot():

    data = [{
        'x': random.random() * 500,
        'y': random.random() * 500,
        'radius': random.random() * (20 - 5) + 5,
        'color': random.choice(['steelblue', 'orange', 'firebrick'])
    } for i in range(100)]

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
