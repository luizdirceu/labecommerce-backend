"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
console.table(database_1.User);
console.table(database_1.Product);
console.table(database_1.Purchase);
(0, database_1.getAllUser)();
(0, database_1.getAllProducts)();
(0, database_1.getProductById)('03');
(0, database_1.queryProductByName)("moto");
(0, database_1.createPurchase)("0505", "p004", 2, 1600);
(0, database_1.getAllPurchasesFromUserId)("02");
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
    res.status(200).send(database_1.User);
});
app.get("/products", (req, res) => {
    res.status(200).send(database_1.Product);
});
app.get("/products/name", (req, res) => {
    const q = req.query.q;
    const result = q ?
        database_1.Product.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()))
        : database_1.Product;
    res.status(200).send(result);
});
app.post("/users", (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = {
        id, email, password
    };
    database_1.User.push(newUser);
    res.status(201).send("Cadastro realizado com sucesso");
});
app.post("/products", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const newProduct = {
        id, name, price, category
    };
    database_1.Product.push(newProduct);
    res.status(201).send("Produto cadastrado com sucesso");
});
app.post("/purchases", (req, res) => {
    const userid = req.body.userid;
    const productid = req.body.productid;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;
    const newPurchase = {
        userid, productid, quantity, totalPrice
    };
    database_1.Purchase.push(newPurchase);
    res.status(201).send('Compra realizada com sucesso');
});
//# sourceMappingURL=index.js.map