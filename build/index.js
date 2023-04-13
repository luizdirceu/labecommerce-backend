"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = require("./database/knex");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield knex_1.db.raw(`SELECT * FROM users;`);
        res.status(200).send({ result });
    }
    catch (error) {
        console.log(error);
    }
}));
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield knex_1.db.raw(`SELECT * FROM products;`);
        res.status(200).send({ result });
    }
    catch (error) {
        console.log(error);
    }
}));
app.get("/products/name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = req.query.q;
        if (q !== undefined) {
            if (q.length < 2) {
                res.status(400);
                throw new Error("q deve ter no minimo 2 caracteres");
            }
        }
        const result = q ?
            yield knex_1.db.raw(`SELECT * FROM products WHERE name = '${q}';`)
            : database_1.Product;
        res.status(200).send({ result });
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
}));
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const createdAt = req.body.createdAt;
        const result = yield knex_1.db.raw(`INSERT INTO users (id, name, email, password, createdAt)VALUES ('${id}', '${name}', '${email}', '${password}', '${createdAt}')`);
        res.status(201).send("Cadastro realizado com sucesso");
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const imageUrl = req.body.imageUrl;
        const result = yield knex_1.db.raw(`INSERT INTO products (id, name, price, description, imageUrl)VALUES ('${id}', '${name}', '${price}', '${description}', '${imageUrl}')`);
        res.status(201).send("Produto cadstrado com sucesso");
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
}));
app.post("/purchases", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const buyerd_id = req.body.buyerd_id;
        const totalPrice = req.body.totalPrice;
        const createdAt = req.body.createdAt;
        const paid = req.body.paid;
        const result = yield knex_1.db.raw(`INSERT INTO purchases (id, total_price, paid, createdAt, buyerd_id)VALUES ('${id}', '${totalPrice}', '${paid}', '${createdAt}', '${buyerd_id}')`);
        res.status(201).send('Compra realizada com sucesso');
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
}));
app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const result = database_1.Product.find((item) => item.id === id);
    res.status(200).send(result);
});
app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const newSenha = req.body.password;
    const senha = database_1.User.find((item) => item.id === id);
    console.log("antes", senha);
    if (senha) {
        senha.password = newSenha || senha.password;
    }
    console.log("depois", senha);
    res.status(201).send("conta alterada");
});
app.put("/product/:id", (req, res) => {
    const id = req.params.id;
    const newPrice = req.body.price;
    const produto = database_1.Product.find((item) => item.id === id);
    console.log("antes", produto);
    if (!produto) {
        res.status(201).send("produto nao encontrado");
    }
    else {
        produto.price = newPrice || produto.price;
    }
    console.log("depois", produto);
    res.status(201).send("produto alterado com sucesso");
});
app.get("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield knex_1.db.raw(`SELECT * FROM products WHERE id = '${id}';`);
        res.status(200).send({ result });
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
}));
app.get("/users/:id/purchases", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield knex_1.db.raw(`SELECT * FROM purchases WHERE buyerd_id = '${id}';`);
        res.status(200).send({ result });
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
}));
//# sourceMappingURL=index.js.map