import { ProductServices } from "./product.service"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"


const createProduct = catchAsync(async(req,res) => {
    const result = await ProductServices.createProduct(req.body)
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product is retrieved successfully',
        data: result,
      });

})


export const ProductController = {
createProduct
}