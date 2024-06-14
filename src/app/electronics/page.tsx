'use client';

import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { useEffect, useState } from 'react';
import electronicsProducts from '@/api/phones/phones.json';
import { ProductCard } from '@/components/Products UI/ProductCard/ProductCard';
import styles from './ElectronicsStyles.module.scss';
import { PageNav } from '@/components/PageNav/PageNav';

export default function Electronics() {
  const [electronics, setElectronics] = useState<UltimateProducts[]>([]);
  useChangePageTitle('Mixed Mart | Electronics');

  useEffect(() => {
    setElectronics(electronicsProducts as unknown as UltimateProducts[]);
  }, []);

  return (
    <section className={styles.electronics}>
      <div className={styles.electronics__container}>
        <div className={styles.electronics__titles}>
          <PageNav title='Mobile Phones' />
          <h1 className={styles.electronics__title}>
            Mixed Market | Mobile Phones
          </h1>
        </div>
        <div className={styles.electronics__items}>
          {electronics.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </div>
      </div>
    </section>
  );
}
