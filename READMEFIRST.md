URL Shortener 

This API allows users to input a long URL and receive a shortened version of the URL in return. The shortened URL can then be used to redirect users to the original, long URL.

This API uses AI technology to generate a random string for the shortened URL, ensuring that it is unique and not already in use.

Dependencies

express: A fast, unopinionated, minimalist web framework for node.
mongodb: A driver for MongoDB.

API Endpoints

POST /shorten: Accepts a POST request with a JSON body containing a single field, url, which represents the long URL to be shortened. Returns a JSON object with a single field, shortLink, which represents the shortened version of the URL.

GET /: Accepts a GET request and returns the string "Hello World".

Usage

Start the API by running node app.js in the command line.
Send a POST request to the /shorten endpoint with a JSON body containing the field url, which represents the long URL to be shortened.
The API will return a JSON object with the shortened version of the URL in the shortLink field.

Example

POST /shorten
Content-Type: application/json

{
  "url": "https://www.example.com/very/long/url"
}

200 OK
Content-Type: application/json

{
  "shortLink": "abcdef"
}

