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
            'tags': input.get('tags'),
            'published': input['published']
        }).inserted_id

        db.users.update({'_id': ObjectId(input['author'])}, {'$push': {'posts': ObjectId(post_id)}})

        return {'status': 200, '_id': post_id}
    except:
        return {'status': 500, 'error': 'Ooops...'}

@mutation.field('updatePost')
def update_post(obj, info, input):

    try: 
        post_id = db.posts.find_one_and_update({
            '_id': ObjectId(input['_id'])
        },
        {
            '$set': {
                'title': input['title'],
                'body': input['body'],
                'tags': input.get('tags'),
                'published': input['published']
            }
        })

        return {'status': 200, '_id': post_id}
    except:
        return {'status': 500, 'error': 'Ooops...'}

@mutation.field('deletePost')
def delete_post(obj, info, _id):
    
    try:
        db.posts.find_one_and_delete({
            '_id': ObjectId(_id)
        })

        return 200
    except:
        return {'status': 500, 'error': 'Ooops...'}
