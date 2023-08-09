// Create web server application
// 1. Get the express module
const express = require('express');
// 2. Create an object of express module
const app = express();
// 3. Create a variable to hold the port number
const port = 3000;
// 4. Create a variable to hold the path of the static folder
const path = require('path');
// 5. Create a variable to hold the path of the data folder
const dataPath = path.join(__dirname, 'data');
// 6. Create a variable to hold the path of the comments.json file
const commentsPath = path.join(dataPath, 'comments.json');
// 7. Create a variable to hold the path of the comments.json file
const comments = require(commentsPath);
// 8. Create a variable to hold the path of the comments.json file
const bodyParser = require('body-parser');
// 9. Use the body parser middleware
app.use(bodyParser.json());
// 10. Use the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// 11. Create a route for the root path
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 12. Create a route for the comments path
app.get('/comments', (req, res) => {
    res.json(comments);
});
// 13. Create a route for the comments path
app.post('/comments', (req, res) => {
    // 14. Create a variable to hold the data from the request body
    const comment = req.body;
    // 15. Create a variable to hold the data from the request body
    comments.push(comment);
    // 16. Create a variable to hold the data from the request body
    res.json(comments);
});
// 17. Create a route for the comments path
app.get('/comments/:id', (req, res) => {
    // 18. Create a variable to hold the data from the request body
    const id = req.params.id;
    // 19. Create a variable to hold the data from the request body
    const comment = comments[id];
    // 20. Create a variable to hold the data from the request body
    res.json(comment);
});
// 21. Create a route for the comments path
app.put('/comments/:id', (req, res) => {
    // 22. Create a variable to hold the data from the request body
    const id = req.params.id;
    // 23. Create a variable to hold the data from the request body
    const comment = req.body;
    // 24. Create a variable to hold the data from the request body
    comments[id] = comment;
    // 25. Create a variable to hold the data from the request body
    res.json(comments);
});