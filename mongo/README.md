# MongoDB
Files to populate a Mongo test database.

## Generate data
`npm run seed`

## Execute mongo shell
Enter into mongo shell so that we can populate databases and collections as needed.
`docker container exec -it <CONTAINER> mongo --username <MONGO_INITDB_ROOT_USERNAME> --password <MONGO_INITDB_ROOT_PASSWORD>`

Load data via files in `/scripts` directory
`load("/scripts/filename.js")`

Done. We have a test database.
