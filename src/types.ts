export enum CATEGORIA  {
    ACESSORIOS = "acessorios",
    ROUPAS = "roupas",
    ELETRONICOS = "eletronicos"
    }
    
    export type TUser = {
        id: string,
        email :string,
        password :string
    }
    export type TProduct = {
        id: string, 
        name: string, 
        price: number,
        category: CATEGORIA
    }
    export type TPurchase = {
        userid: string,
        productid: string,
        quantity: number,
        totalPrice: number
    }