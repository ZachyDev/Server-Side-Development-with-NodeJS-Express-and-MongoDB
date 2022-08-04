const assert = require('assert');

const insertDocument = (db,document,collection,callback) => {
    
    const col = db.collection(collection);

    // insert a document
    col.insertOne(document,(err,result) => {
        assert.equal(err,null);
        callback(result);
    })
}

const findDocument = (db,collection,callback) => {
    const col = db.collection(collection);
    // find document
    col.find({}).toArray((err,docs) => {
        assert.equal(err,null);
        callback(docs);
    })
}

// delete operation

const removeDocument = (db,collection,document,callback) => {
    const col = db.collection(collection);

    // remote document from collection
    col.deleteOne(document,(err,result) => {
        assert.equal(err,null);
        callback(result);
    })
}

// update operation
const updateDocument = (db,document,update,collection, callback) => {
    const col = db.collection(collection);

    col.updateOne(document, {$set: update }, (err,result) => {
        assert.equal(err,null);
        callback(result);
    })
}

module.exports = { insertDocument,findDocument,removeDocument,updateDocument };