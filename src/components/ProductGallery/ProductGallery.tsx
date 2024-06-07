'use client';

import type { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/Product/ProductStyles.module.scss';
import { UltimateProducts } from '@/interfaces/ultimateProducts';

interface ProductGalleryProps {
  product: UltimateProducts;
  productImage: string;
  handleThumbnailProductClick: (image: string) => void;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  product,
  productImage,
  handleThumbnailProductClick,
}) => {
  return (
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
  );
};
