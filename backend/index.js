import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware to parse request body.
app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To MERN Stack Tutorial!");   // status(204).send(x) does not show up on screen.
});

app.use('/books', booksRoute);   // Using Middleware for /books. Pass booksRoute. Automatically prefix added, so path changes in the respective js file (remove /book/ from each) 

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