'use client';

import mensClothings from '@/api/mensFashion/mensFashion.json';

interface ClothingProps {
  params: { name: string };
}

export default function Clothing({ params: { name } }: ClothingProps) {
  const filteredClothings = mensClothings.find(
    (product) => product.name === name
  );

  return <div></div>;
}
