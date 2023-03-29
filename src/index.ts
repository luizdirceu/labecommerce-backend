import { User, Product, Purchase, getAllUser, getAllProducts, getProductById, queryProductByName, createPurchase, getAllPurchasesFromUserId } from "./database";
import  express, { Request, Response} from 'express'
import cors from 'cors';
import { CATEGORIA, TProduct, TUser } from "./types";

// console.table(User);
// console.table(Product);
// console.table(Purchase);
// getAllUser();
// getAllProducts()
// getProductById('03')
// queryProductByName("moto")
// createPurchase("0505", "p004", 2, 1600)
// getAllPurchasesFromUserId("02")

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  });

//exercicio 2
app.get("/user",(req: Request, res: Response)=>{
   try {
    res.status(200).send(User)
   } catch (error) {
    console.log(error);
    
   } 
})  

app.get("/products", (req: Request, res: Response)=>{
try {
    res.status(200).send(Product)
} catch (error) {
    console.log(error);
    
} 
})

app.get("/products/name", (req:Request, res: Response)=>{
   try {
    const q = req.query.q as string
    if (q !== undefined) {
        if (q.length < 2) {
            res.status(400)
            throw new Error("q deve ter no minimo 2 caracteres")

        }
    }
    const result = q ? 
    Product.filter((item)=>item.name.toLowerCase().includes(q.toLowerCase()))
    : Product;
res.status(200).send(result)
   } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
        res.status(500)
    }
    res.end(error.message)
}
})

// exercicio 3
app.post("/users", (req: Request, res: Response)=>{
  try {
    const id: string = req.body.id
    const email: string = req.body.email
    const password : string = req.body.password
    const newUser = {
        id, email, password
    }

    const idExistente = User.find((client) => client.id === newUser.id)
    if(idExistente){
        res.status(400)
        throw new Error("Não é possivel criar usuario com id ja existente")
    }else{
        User.push(newUser)
        res.status(201).send("Cadastro realizado com sucesso")
    }
        
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
        res.status(500)
    }
    res.end(error.message)
  }  
})

app.post("/products", (req: Request, res: Response)=>{
 try {
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const category: CATEGORIA = req.body.category
    const newProduct = {
        id, name, price, category
    }


    const idExistente = Product.find((client) => client.id === newProduct.id)
    if(idExistente){
        res.status(400)
        throw new Error("Não é possivel criar produto com id ja existente")
    }else{
        Product.push(newProduct)
        res.status(201).send("Cadastro realizado com sucesso")
    }

 } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
        res.status(500)
    }
    res.end(error.message)
 }  
})

app.post("/purchases", (req: Request, res: Response)=>{
try {
    const userid : string = req.body.userid
const productid: string = req.body.productid
const quantity: number = req.body.quantity
const totalPrice : number = req.body.totalPrice
const newPurchase = {
    userid, productid, quantity, totalPrice
}
const idExistente = User.find((client) => client.id === newPurchase.userid)
if(!idExistente){
    res.status(400)
     throw new Error("id de usuario inexistente")
}else{
    Purchase.push(newPurchase)
    res.status(201).send('Compra realizada com sucesso')

}
} catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
        res.status(500)
    }
    res.end(error.message)
} 
})

// exercicio aprofundamento express

app.get("/users/:id/purchases", (req: Request, res: Response) => {
    const id: string = req.params.id
    const result = Purchase.filter((item) => {if(item.userid === id){
        return Purchase
    }})
    res.status(200).send(result)
})

app.get("/product/:id", (req: Request, res: Response) => {
    const id: string = req.params.id
    const result = Product.find((item) => item.id === id)
    res.status(200).send(result)
})


//exercicio 2
// app.delete("/user/:id", (req: Request, res: Response) => {
//     const id: string = req.params.id
//     const result: number = User.findIndex((item) => item.id === id)
//     let mensagem: string
//     if (result >= 0) {
//         User.splice(result, 1)
//         mensagem = "item deletado com sucesso"
//     } else {
//         mensagem = "nenhum item encontrado"
//     }
//     console.log(User);
//     res.status(200).send(mensagem)
// })

// app.delete("/product/:id", (req: Request, res: Response) => {
//     const id: string = req.params.id
//     const result: number = Product.findIndex((item) => item.id === id)
//     let mensagem: string
//     if (result >= 0) {
//         User.splice(result, 1)
//         mensagem = "item deletado com sucesso"
//     } else {
//         mensagem = "nenhum item encontrado"
//     }
//     console.log(Product);
//     res.status(200).send(mensagem)
// })
//exercicio 3

app.put("/user/:id", (req: Request, res: Response) => {
    const id: string = req.params.id
    const newSenha: string | undefined = req.body.password

    const senha: TUser = User.find((item) => item.id === id)
    console.log("antes", senha);

    if (senha) {
        senha.password = newSenha || senha.password
    }
    console.log("depois", senha);

    res.status(201).send("conta alterada")
})

app.put("/product/:id", (req: Request, res: Response) => {
    const id: string = req.params.id
    const newPrice: number | undefined = req.body.price
// const newName: string | undefined = req.body.name
    const produto: TProduct = Product.find((item) => item.id === id)
   console.log("antes", produto);

    if (!produto) {
        res.status(201).send("produto nao encontrado")
    }else{
        produto.price = newPrice || produto.price
    }
    console.log("depois", produto);
    res.status(201).send("produto alterado com sucesso")
})
