'use client';

import React, { FC } from 'react';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import styles from '../Product/ProductStyles.module.scss';
import Image from 'next/image';
import { mensFashionItem } from '@/interfaces/mens-fashion';

type ProductType = UltimateProducts | mensFashionItem;

interface ProductGalleryProps {
  product: ProductType;
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
  const productImages = product.images[0] || [];

  return (
    <div className={styles.product__imagesBlock}>
      <div className={styles.productImages__items}>
        {Object.values(productImages).map(
          (image, index) =>
            image && (
              <Image
                key={index}
                src={image}
                alt='product image'
                width={100}
                height={100}
                className={styles.smallImage}
                onClick={() => handleThumbnailProductClick(image, index)}
                style={{
                  opacity: activeIndex === index ? 0.5 : 1,
                  border: activeIndex === index ? '2px solid gray' : '',
                }}
              />
            )
        )}
      </div>
      {productImage && (
        <Image
          src={productImage}
          alt={product.title}
          width={500}
          height={500}
          className={styles.productMainImage}
        />
      )}
    </div>
  );
};
