const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOps = require('./operations');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url).then((client) => {

    console.log('Connected properly to the database');

    const dbName = 'students';
    const db = client.db(dbName);
    const collection = db.collection('basic-info');

    dbOps.insertDocument(db, { "name": "zachary kanda moseti", "course": "computer science" }, 'basic-info')
    .then((result) => {
        console.log(`Inserted successfully`);

        // find collections
        return dbOps.findDocument(db, 'basic-info')
    })
    .then((docs) => {
            console.log('Found:\n', docs);
            // update documents
            return dbOps.updateDocument(db, { name: 'zachary kanda moseti' } , { course: 'IT'} ,'basic-info')
    })
    .then((result) => {
            console.log('Updated:\n', result.result);

            // find doc
            return dbOps.findDocument(db, 'basic-info')
    .then((docs) => {
           console.log('Found:\n', docs);
             // drop collection
            return db.dropCollection('basic-info')
    })
    .then((result) => {
            console.log('Dropped collection: ', result);
            client.close();
    })
    .catch(err => console.log(err));
        })
})
.catch(err => console.log(err));