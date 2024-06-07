'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { useState, type FC } from 'react';
import styles from './ProductStyles.module.scss';
import Image from 'next/image';
import { Star } from 'grommet-icons';
import Link from 'next/link';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductGallery } from '../ProductGallery/ProductGallery';

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
          <ProductGallery
            product={product}
            productImage={productImage}
            handleThumbnailProductClick={handleThumbnailProductClick}
          />
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};
