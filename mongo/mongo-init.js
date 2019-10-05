db = db.getSiblingDB('fivetwentyfive')
db.createUser(
    {
        user: "testuser",
        pwd: "testpass",
        roles: [
            {
                role: "readWrite",
                db: "fivetwentyfive"
            }
        ]
    }
);