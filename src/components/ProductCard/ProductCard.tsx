'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from './ProductCardStyles.module.scss';
import type { FC } from 'react';
import Image from 'next/image';
import { Star } from 'grommet-icons';
import { Button } from '../ui/Button/Button';
import Link from 'next/link';

interface ProductCardProps {
  product: UltimateProducts;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__container}>
        <Image
          priority
          src={product.image}
          alt={`Product Image ${product.title}`}
          width={200}
          height={220}
          className={styles.productCard__image}
        />
        <h3 className={styles.productCard__title}>{product.title}</h3>
        <div className={styles.productCart__prices}>
          <h4 className={styles.productCard__price}>
            Price: {product.discount}₴
          </h4>
          <p className={styles.productCard__discount}>{product.price}₴</p>
        </div>
        <div className={styles.productCard__rating}>
          Rating:
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />({product.rating})
        </div>
        <span className={styles.productCard__id}>ProductId: {product.id}</span>
        <Button type='button' className={styles.productCard__button}>
          <Link
            className={styles.productCard__link}
            href={`/computers/${product.name.replaceAll(' ', '-')}`}
          >
            View product
          </Link>
        </Button>
      </div>
    </div>
  );
};
