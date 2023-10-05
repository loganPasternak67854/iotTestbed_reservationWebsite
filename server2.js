/*
Express: provides broad features for building web and mobile applications. 
It is used to build a single page, multipage, and hybrid web application. 
It's a layer built on the top of the Node js that helps manage servers and routes.
*/
const express = require('express'); 
const app = express();
/*
The Path module provides a way of working with directories and file paths.
*/
const path = require('path');

const port = 8080; // Port number to listen on

// Serve static files from the "public" directory
/*
A static file is any file that is stored in a server is the same every time
it is delivered to users. HTML files,css files, and images are examples of 
this kind of content.
*/
app.use(express.static(path.join(__dirname)));

// Serve the "Testbed Website.html" file
/*

app.get(path, callback) <Binds middleware to application>

path:It is the path for which the middleware function is being called

callback:They can be a middleware function or a series/array of middleware
functions.

*/
app.get('/', (req, res) => {
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

