
from pymongo import MongoClient

client = MongoClient('mongodb://root:example@localhost:27018')

collection = client.sketchbook.categorical

bars = [
    {
        "key": "A",
        "value": 47325
    },
    {
        "key": "G",
        "value": 52315
    },
    {
        "key": "E",
        "value":90765
    },
    {
        "key": "K",
        "value": 23564
    },
    {
        "key": "V",
        "value": 87253
    },
    {
        "key": "X",
        "value": 25547
    },
    {
        "key": "T",
        "value": 53298
    }
]

res = collection.insert_many(bars)

print(res)