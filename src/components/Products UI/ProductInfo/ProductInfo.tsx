import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from '@/components/Product/ProductStyles.module.scss';
import { Favorite, Star } from 'grommet-icons';
import type { FC } from 'react';
import { ProductDelivery } from '../ProductDelivery/ProductDelivery';
import { productDeliveryItems } from '@/interfaces/productDelivery';
import { ProductItemCounter } from '@/components/ProductItemCounter/ProductItemCounter';
import { Button } from '@/components/ui/Button/Button';

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
      <div className={styles.productToBuy__block}>
        <ProductItemCounter />
        <Button type='button' className={styles.productToBuy__button}>
          Buy Now
        </Button>
        <Button className={styles.favorite__button} type='button'>
          <Favorite color='plain' />
        </Button>
      </div>
      <ProductDelivery
        firstPoint={productDeliveryItems.firstPoint}
        secondPoint={productDeliveryItems.secondPoint}
      />
    </div>
  );
};
