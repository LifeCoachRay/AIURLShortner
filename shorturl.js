const express = require('express');
const mongodb = require('mongodb');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('URL shortener API listening on port 3000!');
});



// Replace with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'url-shortener';

async function createShortLink(url) {
  const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db(dbName);
  const links = db.collection('links');

  // Generate a random string for the short link
  const shortLink = generateRandomString();

  // Check if the short link is already in use
  const link = await links.findOne({ shortLink });
  if (link) {
    // If the short link is already in use, try again with a new random string
    return createShortLink(url);
  }

  // If the short link is not in use, insert the new link into the database
  const result = await links.insertOne({
    url,
    shortLink,
  });

  client.close();
  return shortLink;
}

function generateRandomString() {
  // Generate a random string of 6 characters
  return Math.random().toString(36).substring(2, 8);
}

app.post('/shorten', async function(req, res) {
    const url = req.body.url;
    const shortLink = await createShortLink(url);
    res.send({ shortLink });
  });
  