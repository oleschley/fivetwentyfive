
from ariadne import ObjectType
from pymongo import MongoClient
from bson.objectid import ObjectId

from api import config

query = ObjectType('Query')

client = MongoClient(config.MONGO_URI,
                        authSource=config.DATABASE,
                        username=config.USERNAME,
                        password=config.PASSWORD)

db = client[config.DATABASE]


cols = {'__v': 0}

@query.field('user')
def resolve_user(obj, info, _id=None):
    if _id:
        return db.users.find_one({'_id': ObjectId(_id)}, cols)
    else:
        return db.users.find_one({}, cols)
