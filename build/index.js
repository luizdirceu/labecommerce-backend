"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get("/user", (req, res) => {
    try {
        res.status(200).send(database_1.User);
    }
    catch (error) {
        console.log(error);
    }
});
app.get("/products", (req, res) => {
    try {
        res.status(200).send(database_1.Product);
    }
    catch (error) {
        console.log(error);
    }
});
app.get("/products/name", (req, res) => {
    try {
        const q = req.query.q;
        if (q !== undefined) {
            if (q.length < 2) {
                res.status(400);
                throw new Error("q deve ter no minimo 2 caracteres");
            }
        }
        const result = q ?
            database_1.Product.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()))
            : database_1.Product;
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
});
app.post("/users", (req, res) => {
    try {
        const id = req.body.id;
        const email = req.body.email;
        const password = req.body.password;
        const newUser = {
            id, email, password
        };
        const idExistente = database_1.User.find((client) => client.id === newUser.id);
        if (idExistente) {
            res.status(400);
            throw new Error("Não é possivel criar usuario com id ja existente");
        }
        else {
            database_1.User.push(newUser);
            res.status(201).send("Cadastro realizado com sucesso");
        }
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
});
app.post("/products", (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const newProduct = {
            id, name, price, category
        };
        const idExistente = database_1.Product.find((client) => client.id === newProduct.id);
        if (idExistente) {
            res.status(400);
            throw new Error("Não é possivel criar produto com id ja existente");
        }
        else {
            database_1.Product.push(newProduct);
            res.status(201).send("Cadastro realizado com sucesso");
        }
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
});
app.post("/purchases", (req, res) => {
    try {
        const userid = req.body.userid;
        const productid = req.body.productid;
        const quantity = req.body.quantity;
        const totalPrice = req.body.totalPrice;
        const newPurchase = {
            userid, productid, quantity, totalPrice
        };
        const idExistente = database_1.User.find((client) => client.id === newPurchase.userid);
        if (!idExistente) {
            res.status(400);
            throw new Error("id de usuario inexistente");
        }
        else {
            database_1.Purchase.push(newPurchase);
            res.status(201).send('Compra realizada com sucesso');
        }
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.end(error.message);
    }
});
app.get("/users/:id/purchases", (req, res) => {
    const id = req.params.id;
    const result = database_1.Purchase.filter((item) => {
        if (item.userid === id) {
            return database_1.Purchase;
        }
    });
    res.status(200).send(result);
});
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
//# sourceMappingURL=index.js.map