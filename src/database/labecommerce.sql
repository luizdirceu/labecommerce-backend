-- Active: 1680039545528@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
    );

INSERT INTO users (id, email, senha)
VALUES
(01, "luiz@gg.com", "yhrtthtr"), 
(02, "gugu@gg.com", "frfgrgr"),
(03, "leticia@gg.com", "gdrgrerr"); 
SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
    );
INSERT INTO products (id, name, price, category)
VALUES
(011, "moto", 2.000, "motocicleta"), 
(012, "carro", 20.000, "automovel"),
(014, "bike", 400,  "bicicleta"),
(015, "combi", 4.000, "automovel"),
(016, "caminhao", 60.000, "automovel");
SELECT * FROM products;
