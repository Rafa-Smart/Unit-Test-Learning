import { getProductById, getAllProducts } from "./5.database";


export class ProductController {
    static findById(id){
        return getProductById(id)
    }

    static findAll(){
        return getAllProducts()
    }
}