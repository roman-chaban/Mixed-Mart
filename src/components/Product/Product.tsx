'use client';

import { TypeUltimateProducts } from '@/interfaces/ultimateProducts';
import { type FC } from 'react';
import styles from './ProductStyles.module.scss';
import products from '@/api/ultimateProducts/ultimateProducts.json';

interface ProductProps {
  products: TypeUltimateProducts;
}

export const Product: FC<ProductProps> = ({ products }) => {
  return (
    <section className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__account}>
          <h3>Account</h3>/<h4></h4>
        </div>
      </div>
    </section>
  );
};
