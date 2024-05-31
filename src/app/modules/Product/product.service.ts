import QueryBuilder from "../../builder/QueryBuilder"
import TProduct from "./product.interface"
import { ProductModel } from "./product.module"
import { productSearchableFields } from "./student.const"


const createProduct = async (data: TProduct) => {
    const result = await ProductModel.create(data)
    return result
}
const getAllProduct = async (query: Record<string, unknown>) => {
    const productQuery = new QueryBuilder(ProductModel.find(), query)
        .search(productSearchableFields)
        .filter() 
        .fields()
        .sort()
        .paginate()
    
        
    const meta =await productQuery.countTotal();
    console.log(meta);
    const result = await productQuery.modelQuery;
    return { meta, result };
    
}







const getSingleProduct = async (id:string) => {
    const result = await ProductModel.findOne({_id:id})
    return result
}
const updateProduct = async (id: string, data: TProduct) => { 
    const result = await ProductModel.findByIdAndUpdate(id, data, { new: true });
    return result;
};

const deleteProduct = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id:id });
    return result;
}

// const searchProducts = async (filters: any) => {
//     const result = await ProductModel.find(filters);
//     return result;
// }

export const ProductServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}