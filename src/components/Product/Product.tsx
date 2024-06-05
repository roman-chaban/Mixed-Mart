import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { FC } from 'react';

interface ProductProps {
  product: UltimateProducts[];
}

export const Product: FC<ProductProps> = ({ product }) => {
  return <div>
    <h1>Product Title {product[0]?.productTitle}</h1>
  </div>;
};
