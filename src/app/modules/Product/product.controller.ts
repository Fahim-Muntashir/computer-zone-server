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


const getAllProduct = catchAsync(async(req,res) => {
  const result = await ProductServices.getAllProduct(req.query)
  console.log(req.query);

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Product retrieved successfully',
      data: result,
    });

})

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProduct(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Retrived successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProduct(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Deleted successfully',
    data: result,
  })
})

const updateProduct = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await ProductServices.updateProduct(req.params.id,data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Updated successfully',
    data: result,
  })
})


// const searchProducts = catchAsync(async (req, res) => {
//   const { name, category, brand, compatibility, priceRange, interfaceType, condition, capacity, color, formFactor } = req.query;
//   const filters: any = {}; // Object to hold filters

//   // Add filters based on query parameters
//   if (name) filters.name = name;
//   if (category) filters.category = category;
//   if (brand) filters.brand = brand;
//   if (compatibility) filters.compatibility = compatibility;
//   if (priceRange) filters.price = { $gte: priceRange.min, $lte: priceRange.max };
//   if (interfaceType) filters.interfaceType = interfaceType;
//   if (condition) filters.condition = condition;
//   if (capacity) filters.capacity = capacity;
//   if (color) filters.color = color;0
//   if (formFactor) filters.formFactor = formFactor;

//   const result = await ProductServices.searchProducts(filters);

//   sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Products retrieved successfully',
//       data: result,
//   });
// });

export const ProductController = {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  // searchProducts, 
};
