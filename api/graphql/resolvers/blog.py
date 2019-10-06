from pymongo import MongoClient
from ariadne import ObjectType, QueryType
from bson.objectid import ObjectId

from api import config

query = ObjectType('Query')
post = ObjectType('Post')

client = MongoClient(config.MONGO_URI,
                        authSource=config.DATABASE,
                        username=config.USERNAME,
                        password=config.PASSWORD)

db = client[config.DATABASE]

@query.field('post')
def resolve_post(obj, info, _id=None):
    if _id:
        return [db.posts.find_one({'_id': ObjectId(_id)})]
    else:
        return db.posts.find()

@post.field('author')
def resolve_author(obj, info):
    return db.users.find_one({'_id': ObjectId(obj.get('author'))})
