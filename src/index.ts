import { User, Product, Purchase, getAllUser, getAllProducts, getProductById, queryProductByName, createPurchase, getAllPurchasesFromUserId } from "./database";

// console.table(User);
// console.table(Product);
// console.table(Purchase);
// getAllUser();
// getAllProducts()
// getProductById('03')
// queryProductByName("moto")
// createPurchase("0505", "p004", 2, 1600)
getAllPurchasesFromUserId("02")