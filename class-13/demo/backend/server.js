
// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const mongoose = require('mongoose');
const {
    getCats,
    createCat,
    updateCat,
    deleteCat
} = require('./controller/cat.controller');

require('dotenv').config();
const PORT = process.env.PORT;
const { seedUserData } = require('./models/user.model')
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors());
// this method is used to decode our request body sent by the post or put methods
app.use(express.json());


// connect to mongo db using mongoose
mongoose.connect('mongodb://localhost:27017/myFavoriteCats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


//we seed/ populating or filling our database with starter data
// the seed function is responsible for populating our database with data
// invoke/ call once
// seedUserData();

/*
-------------------------------
Our routes
-------------------------------
*/

// Our Cat Routes
// Read route, get all the cats by the user email
app.get('/cats', getCats);
// Create route, which will receive new cats to be added for the user
app.post('/cat', createCat);
// Update route, will will receive the cat id that we want to update, and its info in the body payload
app.put('/cat/:cat_idx', updateCat);
// Delete route, which will delete the cat by its index
app.delete('/cat/:cat_idx', deleteCat)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work
