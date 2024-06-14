import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from '@/components/Products UI/Product/ProductStyles.module.scss';
import { Favorite, Star, StarHalf } from 'grommet-icons';
import type { FC } from 'react';
import { ProductDelivery } from '../ProductDelivery/ProductDelivery';
import { productDeliveryItems } from '@/interfaces/productDelivery';
import { ProductItemCounter } from '@/components/ProductItemCounter/ProductItemCounter';
import { Button } from '@/components/ui/Button/Button';
import { mensFashionItem } from '@/interfaces/mens-fashion';

interface ProductInfoProps {
  product: UltimateProducts | mensFashionItem;
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.productInformation__block}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.productInformation__rating}>
        <h5 className={styles.product__rating}>
          Product rating: {product.productRating}{' '}
          {product.productRating === 5 ? (
            <Star color='plain' />
          ) : (
            <StarHalf color='plain' />
          )}{' '}
          | <mark className={styles.stock__marker}>inStock</mark>
        </h5>
        <span className={styles.product__id}>
          Product id: {product.productId}
        </span>
      </div>
      <div className={styles.productPrices__block}>
        <h4 className={styles.product__price}>
          Price Regular: {product.price} {+product.price <= 300 ? '$' : '₴'}
        </h4>
        {product.priceDiscount === 0 ? (
          ''
        ) : (
          <h5 className={styles.product__discount}>
            Price Discount:{' '}
            <mark className={styles.discount__through}>
              {product.priceDiscount}{' '}
              {+product.priceDiscount <= 300 ? '$' : '₴'}
            </mark>
          </h5>
        )}
      </div>
      <p className={styles.product__about}>{product.about}</p>
      <div className={styles.product__subStyle}>
        <span>
          {product.subStyle ? 'SubStyle: ' : ''} {product.subStyle}
        </span>
        <span>{product.style}</span>
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
