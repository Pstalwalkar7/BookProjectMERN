import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';

const app = express();

// Middleware to parse request body.
app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To MERN Stack Tutorial!");   // status(204).send(x) does not show up on screen.
});

// CREATE BOOK
app.post("/books", async(request, response) => {
    try{
        const {title, author, publisher, publishYear} = {...request.body};
        if(!title || !author || !publisher || !publishYear){
            console.log("Enter all mandatory fields: title, author, publisher, publishYear.");
            return response.status(400).send("Mandatory fields missing");
        }
        const newBook = {
            title: title,
            author: author,
            publisher: publisher,
            publishYear:  publishYear
        }; 

        await Book.create(newBook);
        return response.status(201).send("New Book Added successfully!");
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

// GET ALL BOOKS
app.get("/books", async(request, response) => {
    try{
        const books = await Book.find({});
        const resp = {
            count: books.length,
            data: books
        }
        return response.status(200).json(resp);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

// GET BOOK BY ID
app.get("/books/:id", async(request, response) => {
    try {
        const { id } = {...request.params};
        const book = await Book.findById(id);
        if(!book){
            return response.status(404).send("Book Not Found!");
        } else {
            return response.status(200).json(book);
        }
    } catch (error) {
        console.log(error);
        return response.status(404).send(error);
    }
});

// UPDATE BOOK BY ID
app.put("/books/:id", async(request, response) => {
    try {
        const { id } = {...request.params};
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publisher: request.body.publisher,
            publishYear: request.body.publishYear,
        }
        const result = await Book.findByIdAndUpdate(id, newBook);
        if(!result){
            return response.status(404).send("Book Not Found!");
        } else {
            return response.status(200).send("Updated Book Successfully!");
        }
    } catch (error) {
        console.log(error);
        return response.status(404).send(error);
    }
});

// DELETE BOOK BY ID
app.delete("/books/:id", async(request, response) => {
    try {
        const { id } = {...request.params};
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send("Book Not Found!")
        } else {
            return response.status(200).send("Deleted Book Successfully!");
        }
    } catch (error) {
        console.log(error);
        return response.status(404).send(error);
    }
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