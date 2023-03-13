"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = exports.Product = exports.User = void 0;
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
//# sourceMappingURL=database.js.map