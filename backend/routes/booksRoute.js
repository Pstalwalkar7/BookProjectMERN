import express from 'express';
import {Book} from '../models/bookModel.js';

const router = express.Router();

// CREATE BOOK
router.post("/", async(request, response) => {
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
router.get("/", async(request, response) => {
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
router.get("/:id", async(request, response) => {
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
router.put("/:id", async(request, response) => {
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
router.delete("/:id", async(request, response) => {
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

export default router;