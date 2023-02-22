import { Router } from "express";
import { controller } from "./controller.js";

export const router = new Router();

router.get('/books', controller.getAllBooks);
router.get('/bookSearch/:title', controller.getSearchBooks);
router.get('/book/:id', controller.getBookById);
router.post('/book', controller.addBook);
router.delete('/book/:id', controller.removeBookById);
// router.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));