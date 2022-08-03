const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    assert.equal(err,null);

    console.log('Connected properly to the database');

    const dbName = 'students';
    const db = client.db(dbName);
    const collection = db.collection('basic-info');

    // insert to the basic-info collection
    collection.insertOne({ "firstname": "Zachary", "lastname": "Moseti", "course": "computer science" }, (err,result) => {
        // find a collection
        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null)
            console.log('Records found:\n');
            console.log(docs);

            // delete the collection
            db.dropCollection('basic-info', (err,result) => {
                assert.equal(err,null);
                client.close();
            })
        }) 
    })

})