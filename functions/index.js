// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");


// http request 1

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
});



// http request 2

exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);
    response.send(number.toString());
});


// http request 3

// exports.onDatabaseChange = functions.database
//     .ref("/messages/{messageId}")
//     .onWrite((change, context) => {
//         const beforeData = change.before.val();
//         const afterData = change.after.val();
//         console.log("Database changed from", beforeData, "to", afterData);
//     });