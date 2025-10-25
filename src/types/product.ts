export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export type ProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;