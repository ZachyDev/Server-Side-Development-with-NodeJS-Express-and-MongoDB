const assert = require('assert');

const insertDocument = (db,document,collection,callback) => {
    
    const col = db.collection(collection);
    // insert a document
    return col.insertOne(document);
}

const findDocument = (db,collection,callback) => {
    const col = db.collection(collection);
    // find document
    return col.find({}).toArray();
}

// delete operation

const removeDocument = (db,collection,document,callback) => {
    const col = db.collection(collection)
    // remote document from collection
    return col.deleteOne(document);
}

// update operation
const updateDocument = (db,document,update,collection,callback) => {
    const col = db.collection(collection);
    return col.updateOne(document, {$set: update }, null)
}

module.exports = { insertDocument,findDocument,removeDocument,updateDocument };