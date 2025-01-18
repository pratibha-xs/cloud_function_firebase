const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const moment = require("moment-timezone");


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

admin.initializeApp();
const db = admin.firestore();

exports.addMessage = functions.https.onRequest(async(req, res) => {
    try {
        if (req.method !== "POST") {
            return res.status(405).send("Method Not Allowed. Use POST.");
        }
        const { text } = req.body;
        if (!text || text.trim() === "") {
            return res.status(400).send("Invalid request. 'text' is required.");
        }
        const docRef = await db.collection("messages").add({
            text: text.trim(),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        res.status(201).send({ message: "Message added successfully", id: docRef.id });
    } catch (error) {
        console.error("Error adding message:", error);
        res.status(500).send("Internal Server Error");
    }
});


exports.getCurrentTime = functions.https.onRequest((req, res) => {
    try {
        const now = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
        res.send(`Current Time in India: ${now}`);
    } catch (error) {
        res.status(500).send(`Error occurred: ${error.message}`);
    }
});