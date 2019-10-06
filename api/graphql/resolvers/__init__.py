from . import (
    blog,
    users,
    visuals
)

all_resolvers = [
    blog.query,
    blog.post,
    users.query,
    users.user,
    visuals.query
]