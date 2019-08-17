
import configparser
from pymongo import MongoClient

config = configparser.ConfigParser()
config.read('/etc/fivetwentyfive.conf')

user, password, cluster = [config['mongo'][k] for k in ('user', 'password', 'cluster')]
client = MongoClient(f'mongodb+srv://{user}:{password}@{cluster}.gcp.mongodb.net/test?retryWrites=true&w=majority')

gapminder = client['sketchbook']['gapminder']