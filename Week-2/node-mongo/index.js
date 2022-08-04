const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOps = require('./operations');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    assert.equal(err,null);

    console.log('Connected properly to the database');

    const dbName = 'students';
    const db = client.db(dbName);
    const collection = db.collection('basic-info');

    dbOps.insertDocument(db, { "name": "zachary kanda moseti", "course": "computer science" }, 'basic-info',
     result => {
        console.log(`Inserted successfully`);

        // find collections
        dbOps.findDocument(db, 'basic-info', docs => {
            console.log('Found:\n', docs);

            // update documents
            dbOps.updateDocument(db, { name: 'zachary kanda moseti' } , { course: 'IT'} ,'basic-info', result => {
                console.log('Updated:\n', result.result);

                // find doc
                dbOps.findDocument(db, 'basic-info', docs => {
                    console.log('Found:\n', docs);

                    // drop collection
                    db.dropCollection('basic-info', result => {
                        console.log('Dropped collection: ', result);
                        client.close();
                    })
                })
            })
        })
    })
    

})