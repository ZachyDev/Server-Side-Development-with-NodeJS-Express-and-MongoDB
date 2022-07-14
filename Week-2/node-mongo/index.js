const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbName);
    const collection = db.collection('dishes');

    // insert data into a collection
    collection.insertOne({
        "name": "Burger",
        "description": "Spanish Burger"
    }, (err, result) => {
        assert.equal(err, null);
        
        console.log("After insert: \n");
        console.log(result.ops);

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes', (err,result) => {
                assert.equal(err,null);

                client.close();
            })
        })
    })
})