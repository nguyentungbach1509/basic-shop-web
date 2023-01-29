const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(
    'sk_test_51Hosx2ANgES1P2U08zeM08uukBFBUUAXRlulzSGrBXlTTBjwYGmw14S3Ymw6wHhJ7hKPikc8IITKFX8EA4KJUOdp00pA55Puy7'
)


// API


// App config
const app = express();

// Midlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen command
exports.api = functions.https.onRequest(app);
