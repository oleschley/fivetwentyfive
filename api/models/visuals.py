
# import configparser
from pymongo import MongoClient

# config = configparser.ConfigParser()
# config.read('/etc/fivetwentyfive.conf')

# user, password, cluster = [config['mongo'][k] for k in ('user', 'password', 'cluster')]
# client = MongoClient(f'mongodb://{user}:{password}@{cluster}:{port}/test?retryWrites=true&w=majority')

client = MongoClient('mongodb://root:example@localhost:27017')
categorical_dummy = client['sketchbook']['categorical']


