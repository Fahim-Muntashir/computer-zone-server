import mongoose from 'mongoose';
import TProduct from './product.interface';

const productSchema = new mongoose.Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    compatibility: { type: String, required: true },
    interfaceType: [{ type: String, required: true }],
    condition: { type: String, required: true },
    capacity: { type: String, required: true },
    color: { type: String, required: true },
    formFactor: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = mongoose.model<TProduct>('Product', productSchema);
