import datetime
from ariadne import ObjectType
from bson.objectid import ObjectId

from api.mongo import db

mutation = ObjectType('Mutation')

@mutation.field('createPost')
def create_post(obj, info, input):

    try: 
        post_id = db.posts.insert_one({
            'author': ObjectId(input['author']),
            'created': datetime.datetime.utcnow(),
            'title': input['title'],
            'body': input['body'],
            'published': input['published']
        }).inserted_id

        db.users.update({'_id': ObjectId(input['author'])}, {'$push': {'posts': ObjectId(post_id)}})

        return {'status': 200, '_id': post_id}
    except:
        return {'status': 500, 'error': 'Ooops...'}
