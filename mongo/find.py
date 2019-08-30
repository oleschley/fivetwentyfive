from pprint import pprint
from pymongo import MongoClient

client = MongoClient('mongodb://root:example@localhost:27018')

categorical_dummy = client['sketchbook']['categorical']

cursor = categorical_dummy.find({})

for doc in cursor: 
    pprint(doc)