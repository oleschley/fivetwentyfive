from ariadne import QueryType

query = QueryType()


@query.field('user')
def resolve_user(*_):

    user = {
        'id': 'foobar123',
        'first': 'foo',
        'last': 'bar',
        'email': 'foo@bar.baz'
    }

    return user

@query.field('post')
def resolve_post(*_):

    post = {
        'id': 'post123',
        'title': 'this is a post',
        'body': "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
        'published': False
    }

    return post
