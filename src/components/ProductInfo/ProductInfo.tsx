import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from '@/components/Product/ProductStyles.module.scss';
import { Star } from 'grommet-icons';
import type { FC } from 'react';
import { ProductItemCounter } from '../ProductItemCounter/ProductItemCounter';

interface ProductInfoProps {
  product: UltimateProducts;
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.productInformation__block}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.productInformation__rating}>
        <h5 className={styles.product__rating}>
          Laptop rating: {product.rating} <Star color='plain' /> |{' '}
          <mark className={styles.stock__marker}>inStock</mark>
        </h5>
        <span className={styles.product__id}>Laptop id: {product.id}</span>
      </div>
      <div className={styles.productPrices__block}>
        <h4 className={styles.product__price}>
          Price Regular: {product.discount}₴
        </h4>
        <h5 className={styles.product__discount}>
          Price Discount:{' '}
          <mark className={styles.discount__through}>{product.price}₴</mark>
        </h5>
      </div>
      <ProductItemCounter />
    </div>
  );
};
