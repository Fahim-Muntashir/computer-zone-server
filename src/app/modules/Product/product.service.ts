import TProduct from "./product.interface"
import { ProductModel } from "./product.module"


const createProduct = async (data: TProduct) => {
    const result = await ProductModel.create(data)
    return result
}


export const ProductServices = {
createProduct
}