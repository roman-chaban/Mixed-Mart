'use client';

import { useEffect, useState } from 'react';
import styles from './ComputersStyles.module.scss';
import computersProducts from '@/api/ultimateProducts/ultimateProducts.json';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { ProductCard } from '@/components/Products UI/ProductCard/ProductCard';
import { PageNav } from '@/components/PageNav/PageNav';

export default function Computers() {
  const [computers, setComputers] = useState<UltimateProducts[]>([]);

  useEffect(() => {
    setComputers(computersProducts);
  }, []);

  return (
    <section className={styles.computers}>
      <div className={styles.computers__container}>
        <div className={styles.computers__titles}>
        <PageNav title='Computers & Laptops' />
        <h1 className={styles.computers__title}>
          Mixed Market | Computers & Laptops
        </h1>
        </div>
        <div className={styles.computers__products}>
          {computers.map((computer) => (
            <ProductCard key={computer.productId} product={computer} />
          ))}
        </div>
      </div>
    </section>
  );
}
