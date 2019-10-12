import datetime
from ariadne import ObjectType
from bson.objectid import ObjectId

from api.mongo import db


post = ObjectType('Post')
query = ObjectType('Query')
mutation = ObjectType('Mutation')

@query.field('posts')
def resolve_post(obj, info, _id=None):
    if _id:
        return [db.posts.find_one({'_id': ObjectId(_id)})]
    else:
        return db.posts.find()

@post.field('author')
def resolve_author(obj, info):
    return db.users.find_one({'_id': ObjectId(obj.get('author'))})

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
                'updated': datetime.datetime.utcnow(),
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
