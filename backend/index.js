import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL, CORS } from './config.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware to parse request body.
app.use(express.json());

// Middleware for CORS Policy
// Option 1: Allows all, no restrictions
//app.use(cors())
// Option 2: Customized control; Better
app.use(cors(
    {
        origin: CORS,    // whitelisted origins. 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']        
    }
));


// Using Middleware for /books. Pass booksRoute. Automatically prefix added, so path changes in the respective js file (remove /book/ from each) 
app.use('/books', booksRoute);   

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To MERN Stack Tutorial!");   // status(204).send(x) does not show up on screen.
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Successfully Connected to DB!");
        app.listen(PORT, () => {       // refactored to add in this section so that this msg only if connected to DB. 
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });