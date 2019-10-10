from . import (
    blog,
    users,
    visuals
)

all_resolvers = [
    blog.post,
    blog.query,
    blog.mutation,
    users.user,
    users.query,
    visuals.query
]