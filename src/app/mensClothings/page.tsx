'use client';

import { MensFashionProducts } from '@/interfaces/mens-fashion';
import { useEffect, useState } from 'react';
import mensClothings from '@/api/mensFashion/mensFashion.json';
import { ProductCard } from '@/components/Clothings UI/ProductCard/ProductCard';
import styles from './MensClothingsStyles.module.scss';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { PageNav } from '@/components/PageNav/PageNav';

export default function MensClothings() {
  useChangePageTitle("Mixed Mart | Men's Clothings");
  const [clothings, setClothings] = useState<MensFashionProducts>([]);

  useEffect(() => {
    setClothings(mensClothings);
  }, []);

  return (
    <section>
      <div className={styles.clothings__container}>
        <div className={styles.clothings__titles}>
          <PageNav title="Men's Clothings" />
          <h1 className={styles.clothings__title}>
            Mixed Market | Men&apos;s Clothings
          </h1>
        </div>
        <div className={styles.clothings__products}>
          {clothings.map((clothing) => (
            <ProductCard
              key={clothing.productId}
              product={clothing as unknown as UltimateProducts}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
