'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { useState, type FC } from 'react';
import styles from './ProductStyles.module.scss';
import Link from 'next/link';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductSlider } from '../ProductsSlider/ProductsSlider';

interface ProductProps {
  product: UltimateProducts;
}

export const Product: FC<ProductProps> = ({ product }) => {
  const [productImage, setProductImage] = useState(product.mainImage);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleThumbnailProductClick = (image: string, index: number) => {
    setProductImage(image);
    setActiveIndex(index);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.productNav__block}>
          <h3 className={styles.account}>
            <Link className={styles.account__link} href={product.category}>
              Computers
            </Link>
          </h3>
          <h4 className={styles.product__category}>{product.category}</h4>
          <h5 className={styles.product__title}>{product.title}</h5>
        </div>
        <div className={styles.productItem}>
          <ProductGallery
            activeIndex={activeIndex}
            product={product}
            productImage={productImage}
            handleThumbnailProductClick={handleThumbnailProductClick}
          />
          <ProductInfo product={product} />
        </div>
        <ProductSlider title='Related Item' />
      </div>
    </div>
  );
};
