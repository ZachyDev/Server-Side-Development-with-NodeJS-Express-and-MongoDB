const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let url = 'mongodb://localhost:27017';
const dbName = 'Confusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err,null);

    console.log('Connected properly to the server');

    const db = client.db(dbName);
    const collection = db.collection('dishes');

    collection.insertOne({ "name": "Spanish Burger", "description": "Spanish burger costs $250"},(err,result) => {
        assert.equal(err,null);

        console.log('After insert:\n');
        console.log(result.ops);

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null)
            
            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes', (err,result) => {
                assert.equal(err,null);
                client.close();
        })
        });
    })
})