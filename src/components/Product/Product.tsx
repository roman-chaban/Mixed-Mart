'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { useState, type FC } from 'react';
import styles from './ProductStyles.module.scss';
import Image from 'next/image';
import { Star } from 'grommet-icons';
import Link from 'next/link';

interface ProductProps {
  product: UltimateProducts;
}

export const Product: FC<ProductProps> = ({ product }) => {
  const [productImage, setProductImage] = useState(product.image);

  const handleThumbnailProductClick = (image: string) => {
    setProductImage(image);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.productNav__block}>
          <h3 className={styles.account}>
            <Link className={styles.account__link} href='/computers'>
              Computers
            </Link>
          </h3>
          <h4 className={styles.product__category}>{product.category}</h4>
          <h5 className={styles.product__title}>{product.title}</h5>
        </div>
        <div className={styles.productItem}>
          <div className={styles.product__imagesBlock}>
            <div className={styles.productImages__items}>
              <Image
                src={product.productImages[0].first}
                alt='product image'
                width={80}
                height={100}
                className={styles.smallImage}
                onClick={() =>
                  handleThumbnailProductClick(product.productImages[0].first)
                }
              />
              <Image
                src={product.productImages[0].second}
                alt='product image'
                width={80}
                height={100}
                className={styles.smallImage}
                onClick={() =>
                  handleThumbnailProductClick(product.productImages[0].second)
                }
              />
              <Image
                src={product.productImages[0].third}
                alt='product image'
                width={80}
                height={100}
                className={styles.smallImage}
                onClick={() =>
                  handleThumbnailProductClick(product.productImages[0].third)
                }
              />
              <Image
                src={product.productImages[0].four}
                alt='product image'
                width={80}
                height={100}
                className={styles.smallImage}
                onClick={() =>
                  handleThumbnailProductClick(product.productImages[0].four)
                }
              />
              <Image
                src={product.productImages[0].five}
                alt='product image'
                width={80}
                height={100}
                className={styles.smallImage}
                onClick={() =>
                  handleThumbnailProductClick(product.productImages[0].five)
                }
              />
            </div>
            <Image
              priority
              src={productImage}
              alt={`${product.title}`}
              width={400}
              height={400}
              className={styles.productMainImage}
            />
          </div>
          <div className={styles.productInformation__block}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.productInformation__rating}>
              <h5 className={styles.product__rating}>
                Laptop rating: {product.rating} <Star color='plain' /> |{' '}
                <mark className={styles.stock__marker}>inStock</mark>
              </h5>
              <span className={styles.product__id}>
                Laptop id: {product.id}
              </span>
            </div>
            <div className={styles.productPrices__block}>
              <h4 className={styles.product__price}>
                Price Regular: {product.discount}₴
              </h4>
              <h5 className={styles.product__discount}>
                Price Discount:{' '}
                <mark className={styles.discount__through}>
                  {product.price}₴
                </mark>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
