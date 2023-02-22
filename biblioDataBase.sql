-- Active: 1676661358472@@127.0.0.1@5432@postgre
-- 1. Creation du base de donnee : bibliotheque
CREATE DATABASE bibliotheque;

-- 2. Se connecter a cette base de donnee
\c bibliotheque;

-- 3. Creation du table livre ou stocker tous les livres : book
CREATE TABLE book (
    id SERIAL PRIMARY KEY ,
    title VARCHAR(100) NOT NULL ,
    author VARCHAR(100) NOT NULL ,
    cover_img text ,
    description TEXT ,
    genre VARCHAR(100) ,
    publication_date DATE ,
    available BOOLEAN DEFAULT true
);

-- 4. Les inserts pour avoir des valeurs par defaut :
INSERT INTO book (title, author, cover_img, description, genre, publication_date)
VALUES
('Harry Potter', 'J. K. Rowling', 'http://localhost:5000/image/harrypotter.jpg' , 'Les aventures d''un jeune sorcier nommé Harry Potter ...', 'Fantastique', '2000-02-12');

INSERT INTO book (title, author, cover_img, description, genre, publication_date)
VALUES
('Solo Leveling', 'Jang Sung-Lak', 'http://localhost:5000/image/sololeveling2.jpg', 'L''evolution du plus faible chasseur parmi les faibles ... ', 'Manhua', '2020-09-19');

INSERT INTO book (title, author, cover_img, description, genre, publication_date, available)
VALUES
('Hercule Poirot : Mort sur le Nil', 'Agatha Christie','http://localhost:5000/image/Poirot.jpg',  'Les aventure du plus grand dective du 20em siecle', 'Roman Policier', '1970-03-23', false);

INSERT INTO book (title, author, cover_img, description, genre, publication_date, available)
VALUES
('Theo Lawrence', 'Mystic City', 'http://localhost:5000/image/mystic.jpg', 'Romeo et Juliette dans un New York futuriste ...', 'Futuriste', '2014-02-14', false);
INSERT INTO book (title, author, cover_img, description, genre, publication_date)
VALUES
('Fantastic Beasts', 'J. K. Rowling', 'http://localhost:5000/image/beasts.jpg' , 'L''Histoire ce passe avant la naissance d''Harry Potter ...', 'Fantastique', '2018-05-03');
