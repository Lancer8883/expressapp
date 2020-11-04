// require the express framework for creating web servers...
const express = require('express');

const PORT = 3000;

// creating instance of express
const app = express();

// subscribe to home page route
app.get('/', (req, res) => {
    // sending html file
    res.sendFile('pages/index.html', { root: __dirname })
})

// biding app port
app.listen(PORT, () => {
    console.log(`Express listening to port ${PORT}`)
})