import productsData from '@/api/ultimateProducts/ultimateProducts.json';
import { TypeUltimateProducts } from '@/interfaces/ultimateProducts';

const products: TypeUltimateProducts = productsData;

export const getProducts = async (): Promise<TypeUltimateProducts> => {
  try {
    return products;
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};
