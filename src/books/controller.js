import { pool } from "../../databaseConnection.js";
import { queries } from "./queries.js";
import path from "path";
const __dirname = path.resolve();

const getAllBooks = (req, res) => {
    pool.query(queries.getAllBooks, (error, results) => {
        if(error) throw error;
        let allBooks = results.rows;
        res.send(allBooks);
        // res.status(200).json(results.rows);
    });
}

const getSearchBooks = (req, res, next) => {
    const titleS = req.params.title;

    pool.query(queries.getSearchBook, [titleS], (error, results) => {
        if(error) throw error;
        let allBooks = results.rows;
        res.send(allBooks);
        // res.sendFile(__dirname + '/public/index.html');
        // res.status(200).json(results.rows);
    });
}

const getBookById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getBookById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const addBook = (req, res) => {
    const titleBack = req.body.title;
    const authorBack = req.body.author;
    const cover_imgBack = req.files.cover_image;
    const descriptionBack = req.body.description;
    const genreBack = req.body.genre;
    const publication_dateBack = req.body.publication_date;
    let pathUpload = __dirname + "/public/image/" + cover_imgBack.name;

    cover_imgBack.mv(pathUpload);
    const cover_img = 'http://localhost:5000/image/' + cover_imgBack.name;

    pool.query(queries.addBook, 
        [titleBack, 
        authorBack,
        cover_img,
        descriptionBack,
        genreBack, 
        publication_dateBack],
        (error, results) => {
            if(error) throw error;
            res.status(201).redirect('/');
    });

}

const removeBookById = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(queries.getBookById, [id], (error, results) => {
        const bookNotFound = !results.rows.length;
        if(bookNotFound){
            res.send("Book does not exist.")
        }
    });

    pool.query(queries.removeBookById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Book removed successfully.")
    });
}

export const controller = {
    getAllBooks,
    getBookById,
    addBook,
    removeBookById,
    getSearchBooks,
}