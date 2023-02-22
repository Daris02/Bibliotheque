const getAllBooks = "SELECT * FROM book ORDER BY title";
const getBookById = "SELECT * FROM book WHERE id = $1";
const addBook = "INSERT INTO book (title, author, cover_img, description, genre, publication_date) " +
"VALUES ($1, $2, $3, $4, $5, $6)";
const removeBookById = "DELETE FROM book WHERE id = $1";
const getSearchBook = "SELECT * FROM book WHERE title ILIKE '%'||$1||'%' ORDER BY title";

export const queries = {
    getAllBooks,
    getBookById,
    addBook,
    removeBookById,
    getSearchBook,
}