'use client';

import mensClothings from '@/api/mensFashion/mensFashion.json';
import { Product } from '@/components/Clothings UI/Product/Product';
import { ProductGallery } from '@/components/Products UI/ProductGallery/ProductGallery';
import { mensFashionItem } from '@/interfaces/mens-fashion';

interface ClothingProps {
  params: { name: string };
}

export default function Clothing({ params: { name } }: ClothingProps) {
  const filteredClothings = mensClothings.find(
    (product) => product.name === name
  );

  return (
    <div>
      <Product product={filteredClothings as mensFashionItem} />
    </div>
  );
}
