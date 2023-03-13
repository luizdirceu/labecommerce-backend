"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductByName = exports.getProductById = exports.getAllProducts = exports.getAllUser = exports.Purchase = exports.Product = exports.User = void 0;
const types_1 = require("./types");
exports.User = [{
        id: "02",
        email: "junim@",
        password: "mhjkhhkgh"
    }, {
        id: "06",
        email: "luiz@",
        password: "1455484185"
    }];
exports.Product = [{
        id: "01",
        name: "carro",
        price: 5000,
        category: types_1.CATEGORIA.ACESSORIOS
    }, {
        id: "03",
        name: "moto",
        price: 3000,
        category: types_1.CATEGORIA.ELETRONICOS
    }
];
exports.Purchase = [{
        userid: "02",
        productid: "01",
        quantity: 1,
        totalPrice: 5000
    }, {
        userid: "06",
        productid: "03",
        quantity: 5,
        totalPrice: 5 * 3000
    }];
function createUser(id, email, password) {
    const novoUsuario = { id, email, password };
    exports.User.push(novoUsuario);
    console.log("Cadatro realizado com sucesso!");
}
createUser("08", "user@gg.com", "fdhfd");
function getAllUser() {
    console.log(exports.User);
}
exports.getAllUser = getAllUser;
function createProduct(id, name, price, category) {
    const novoProduto = { id, name, price, category };
    exports.Product.push(novoProduto);
    console.log("Produto criado com sucesso");
}
createProduct("006", "van", 15000, types_1.CATEGORIA.ACESSORIOS);
function getAllProducts() {
    console.log(exports.Product);
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    exports.Product.find((item) => {
        if (item.id === id) {
            return console.log(item);
        }
    });
}
exports.getProductById = getProductById;
function queryProductByName(q) {
    return exports.Product.filter((item) => {
        if (item.name === q) {
            return console.log(item);
        }
    });
}
exports.queryProductByName = queryProductByName;
function createPurchase(userid, productid, quantity, totalPrice) {
    const novoPurchase = { userid, productid, quantity, totalPrice };
    exports.Purchase.push(novoPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userid) {
    exports.Purchase.filter((item) => {
        if (item.userid === userid) {
            return console.log(item);
        }
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map