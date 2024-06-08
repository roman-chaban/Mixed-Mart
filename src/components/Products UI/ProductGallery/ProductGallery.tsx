'use client';

import React, { FC } from 'react';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from '../Product/ProductStyles.module.scss';
import Image from 'next/image';

interface ProductGalleryProps {
  product: UltimateProducts;
  productImage: string;
  activeIndex: number;
  handleThumbnailProductClick: (image: string, index: number) => void;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  product,
  productImage,
  activeIndex,
  handleThumbnailProductClick,
}) => {
  const productImages = product.productImages[0];

  return (
    <div className={styles.product__imagesBlock}>
      <div className={styles.productImages__items}>
        {Object.values(productImages).map((image, index) => (
          <Image
            key={index}
            src={image}
            alt='product image'
            width={80}
            height={100}
            className={styles.smallImage}
            onClick={() => handleThumbnailProductClick(image, index)}
            style={{
              opacity: activeIndex === index ? 0.5 : 1,
              border: activeIndex === index ? '2px solid gray' : '',
            }}
          />
        ))}
      </div>
      <Image
        src={productImage}
        alt={product.title}
        width={400}
        height={400}
        className={styles.productMainImage}
      />
    </div>
  );
};
