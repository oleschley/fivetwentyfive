
import random
from flask import Flask, jsonify
from data.categorical import bars
app = Flask(__name__)


@app.route('/')
def landing():
    return 'Welcome to the landing page'


@app.route('/data/visuals/bar')
def bar_chart():
    return jsonify(bars)


@app.route('/data/visuals/scatter')
def scatter_plot():
    
    def generate_data():
        x = random.random() * 500
        y = random.random() * 500
        radius = random.random() * (20 - 5) + 5
        color = random.random()

        if color < 0.66:
            if color < 0.33:
                color = 'steelblue'
            else:
                color = 'orange'
        else:
            color = 'firebrick'
        
        return {'x': x, 'y': y, 'radius': radius, 'color': color}

    data = [generate_data() for i in range(100)]

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
