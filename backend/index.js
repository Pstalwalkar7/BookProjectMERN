import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';

const app = express();

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