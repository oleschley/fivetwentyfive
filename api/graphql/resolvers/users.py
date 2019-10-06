
from ariadne import ObjectType
from pymongo import MongoClient
from bson.objectid import ObjectId

from api import config

query = ObjectType('Query')
user = ObjectType('User')

client = MongoClient(config.MONGO_URI,
                        authSource=config.DATABASE,
                        username=config.USERNAME,
                        password=config.PASSWORD)

db = client[config.DATABASE]

@query.field('users')
def resolve_user(obj, info, _id=None):
    if _id:
        return [db.users.find_one({'_id': ObjectId(_id)})]
    else:
        return db.users.find({})

@user.field('posts')
def resolve_posts(obj, info):
    return [p for p in db.posts.find({'author': ObjectId(obj.get('_id'))})]
