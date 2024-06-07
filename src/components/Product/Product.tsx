'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import type { FC } from 'react';
import styles from './ProductStyles.module.scss';
import Image from 'next/image';

interface ProductProps {
  product: UltimateProducts;
}

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.productNav__block}>
          <h3 className={styles.account}>Account</h3>
          <h4 className={styles.product__category}>{product.category}</h4>
          <h5 className={styles.product__title}>{product.title}</h5>
        </div>
        <div className={styles.product__imagesBlock}>
          <div className={styles.productImages__items}>
            <Image
              src={product.productImages[0].first}
              alt='product image'
              width={80}
              height={100}
              className={styles.smallImage}
            />
            <Image
              src={product.productImages[0].second}
              alt='product image'
              width={80}
              height={100}
              className={styles.smallImage}
            />
            <Image
              src={product.productImages[0].third}
              alt='product image'
              width={80}
              height={100}
              className={styles.smallImage}
            />
            <Image
              src={product.productImages[0].four}
              alt='product image'
              width={80}
              height={100}
              className={styles.smallImage}
            />
            <Image
              src={product.productImages[0].five}
              alt='product image'
              width={80}
              height={100}
              className={styles.smallImage}
            />
          </div>
          <Image
            src={product.image}
            alt={`${product.title}`}
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};
