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
    productid: "045",
    quantity: 1,
    totalPrice: 5000
}, {
    userid: "06",
    productid: "01",
    quantity: 5,
    totalPrice: 5 * 3000
},
{
    userid: "02",
    productid: "03",
    quantity: 1,
    totalPrice: 5000
}]

function createUser(id: string, email: string, password: string) {
    const novoUsuario = { id, email, password }
    User.push(novoUsuario)
    console.log("Cadatro realizado com sucesso!");
}

createUser("08", "user@gg.com", "fdhfd")
// console.log(User);

export function getAllUser (){
    console.log(User);
}
// getAllUser()

function createProduct(id: string, name: string, price: number, category: CATEGORIA) {
    const novoProduto = { id, name, price,category }
    Product.push(novoProduto)
    console.log("Produto criado com sucesso");
}
createProduct("006", "van", 15000, CATEGORIA.ACESSORIOS)

export function getAllProducts ():void{
    console.log(Product);
}
// getAllProducts()

export function getProductById (id:string){
   Product.find((item)=>{
    if(item.id === id){
      return console.log(item);
    }
   })
}

export function queryProductByName(q:string):TProduct[]{
    return Product.filter((item)=>{
        if(item.name === q) {
        return console.log(item);  
    }})
}
export function createPurchase(userid: string, productid: string, quantity: number,totalPrice: number){
    const novoPurchase = {userid, productid, quantity, totalPrice}
    Purchase.push(novoPurchase)
    console.log("Compra realizada com sucesso");
    }
    
    export function getAllPurchasesFromUserId(userid:string){
        Purchase.filter((item)=>{if(item.userid === userid){
            return console.log(item);
        }})
    }