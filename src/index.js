// var MongoClient = require('mongodb').MongoClient
// var format = require('util').format;
// MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, db) {
// 	if (err) {
// 		throw err;
// 	} else {
// 		console.log("successfully connected to the database");
// 	}
// 	db.close();
// });


const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://127.0.0.1:27017/mydb";
 

const client = new MongoClient(uri);

try {
    // Connect to the MongoDB cluster
    await mydb.connect();

    // Make the appropriate DB calls
    await  listDatabases(mydb);

} catch (e) {
    console.error(e);
} finally {
    await mydb.close();
}
}

main().catch(console.error);

