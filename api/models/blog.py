import datetime
from dataclasses import dataclass


@dataclass
class Post:
    title: str
    preview: str
    body: str
    tags: list
    created: datetime.datetime
    updated: datetime.datetime
    author: int
    username: str
