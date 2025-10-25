import axios from 'axios';
import { type Product, type ProductInput } from '../types/product';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getProducts = () => api.get<Product[]>('/products');
export const getProduct = (id: number) => api.get<Product>(`/products/${id}`);
export const createProduct = (product: ProductInput) => api.post<Product>('/products', product);
export const updateProduct = (id: number, product: ProductInput) => api.put<Product>(`/products/${id}`, product);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`); 