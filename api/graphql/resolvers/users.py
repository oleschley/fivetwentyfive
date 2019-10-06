
from ariadne import ObjectType
from bson.objectid import ObjectId

from api.mongo import db

query = ObjectType('Query')
user = ObjectType('User')

@query.field('users')
def resolve_user(obj, info, _id=None):
    if _id:
        return [db.users.find_one({'_id': ObjectId(_id)})]
    else:
        return db.users.find({})

@user.field('posts')
def resolve_posts(obj, info):
    return [p for p in db.posts.find({'author': ObjectId(obj.get('_id'))})]
