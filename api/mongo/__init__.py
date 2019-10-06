from pymongo import MongoClient

MONGO_URI = 'mongodb://mongo:27017'
DATABASE = 'fivetwentyfive'
USERNAME = 'testuser'
PASSWORD = 'testpass'

client = MongoClient(MONGO_URI,
                     authSource=DATABASE,
                     username=USERNAME,
                     password=PASSWORD)

db = client[DATABASE]
