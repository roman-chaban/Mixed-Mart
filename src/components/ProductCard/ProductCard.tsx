'use client';

import { TypeUltimateProducts } from '@/interfaces/ultimateProducts';
import styles from './ProductCardStyles.module.scss';
import type { FC } from 'react';
import Image from 'next/image';
import { Star } from 'grommet-icons';
import { Button } from '../ui/Button/Button';

interface ProductCardProps {
  product: TypeUltimateProducts;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__container}>
        <Image
          priority
          src={product.productImage}
          alt={`Product Image ${product.productTitle}`}
          width={200}
          height={220}
          className={styles.productCard__image}
        />
        <h3 className={styles.productCard__title}>{product.productTitle}</h3>
        <div className={styles.productCart__prices}>
          <h4 className={styles.productCard__price}>
            Price: {product.productDiscount}₴
          </h4>
          <p className={styles.productCard__discount}>
            {product.productPrice}₴
          </p>
        </div>
        <div className={styles.productCard__rating}>
          Rating:
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />({product.productRating})
        </div>
        <span className={styles.productCard__id}>
          ProductId: {product.productId}
        </span>
        <Button type='button' className={styles.productCard__button}>
          View product
        </Button>
      </div>
    </div>
  );
};
