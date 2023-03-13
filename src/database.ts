import { TUser, TProduct, TPurchase, CATEGORIA } from "./types";

export const User: TUser[] = [{
    id: "02",
    email: "junim@",
    password: "mhjkhhkgh"
}, {
    id: "06",
    email: "luiz@",
    password: "1455484185"
}]



export const Product: TProduct[] = [{
    id: "01",
    name: "carro",
    price: 5000,
    category: CATEGORIA.ACESSORIOS
}, {
    id: "03",
    name: "moto",
    price: 3000,
    category: CATEGORIA.ELETRONICOS
}
]


export const Purchase: TPurchase[] = [{
    userid: "02",
    productid: "01",
    quantity: 1,
    totalPrice: 5000
}, {
    userid: "06",
    productid: "03",
    quantity: 5,
    totalPrice: 5 * 3000
}]