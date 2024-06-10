'use client';

import { MensFashionProducts } from '@/interfaces/mens-fashion';
import { useEffect, useState } from 'react';
import mensClothings from '@/api/mensFashion/mensFashion.json';
import { ProductCard } from '@/components/Clothings UI/ProductCard/ProductCard';
import styles from './MensClothingsStyles.module.scss';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';

export default function MensClothings() {
  useChangePageTitle("Mixed Mart | Men's Clothings");
  const [clothings, setClothings] = useState<MensFashionProducts>([]);

  useEffect(() => {
    setClothings(mensClothings);
  }, []);

  return (
    <section>
      <div className={styles.clothings__container}>
        <h1 className={styles.clothings__title}>
          Mixed Market | Men&apos;s Clothings
        </h1>
        <div className={styles.clothings__products}>
          {clothings.map((clothing) => (
            <ProductCard key={clothing.productId} product={clothing} />
          ))}
        </div>
      </div>
    </section>
  );
}
