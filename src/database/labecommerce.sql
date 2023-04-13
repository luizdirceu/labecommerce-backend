-- Active: 1680039545528@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    createdAt TEXT NOT NULL
    );
DROP TABLE users;
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
    description TEXT NOT NULL,
    imageUrl TEXT NOT NULL
    );
    DROP TABLE products;
INSERT INTO products (id, name, price, category)
VALUES
(011, "moto", 2.000, "motocicleta"), 
(012, "carro", 20.000, "automovel"),
(014, "bike", 400,  "bicicleta"),
(015, "combi", 4.000, "automovel"),
(016, "caminhao", 60.000, "automovel");

SELECT * FROM products;
--exercicio 1
-- CREATE TABLE purchases (
--     id text PRIMARY KEY NOT NULL UNIQUE,
--     total_price REAL NOT NULL,
--     paid INTEGER NOT NULL,
--     delivered_at TEXT,
--     buyerd_id TEXT NOT NULL,
--     FOREIGN KEY (buyerd_id) REFERENCES users(id)
-- );
DROP TABLE purchases;
CREATE TABLE purchases (
    id text PRIMARY KEY NOT NULL UNIQUE,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    createdAt TEXT,
    buyerd_id TEXT NOT NULL,
    FOREIGN KEY (buyerd_id) REFERENCES users(id)
);
INSERT INTO purchases (id, total_price, paid, delivered_at, buyerd_id)
VALUES
("P04", 5000, 0, NULL, 01),
("P05", 9000, 0, NULL, 01),
("P06", 5000, 0, NULL, 02),
("P07", 5000, 0, NULL, 02);

SELECT * FROM purchases;

UPDATE purchases
SET
delivered_at = "04/04"
WHERE buyerd_id = 01;



--exercicio 3
-- SELECT * FROM purchases
-- INNER JOIN users
-- ON purchases.buyerd_id = users.id;

-- DELETE FROM purchases
