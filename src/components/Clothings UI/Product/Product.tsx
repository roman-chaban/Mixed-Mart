import { mensFashionItem } from '@/interfaces/mens-fashion';
import { useState, type FC } from 'react';
import styles from './ProductStyles.module.scss';
import Link from 'next/link';
import { ProductGallery } from '@/components/Products UI/ProductGallery/ProductGallery';
import { ProductInfo } from '@/components/Products UI/ProductInfo/ProductInfo';
import { ClothingsSlider } from '@/components/Clothings UI/ClothingsSlider/ClothingsSlider';

interface ProductProps {
  product: mensFashionItem;
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
          <h3 className={styles.product__title}>
            <Link className={styles.product__link} href='/'>
              Home
            </Link>
          </h3>
          <h4 className={styles.product__category}>{product.category}</h4>
          <h5 className={styles.product__subStyle}>{product.subStyle}</h5>
        </div>
        <div className={styles.product__flex}>
          <div className={styles.product__col}>
            <ProductGallery
              product={product}
              activeIndex={activeIndex}
              handleThumbnailProductClick={handleThumbnailProductClick}
              productImage={productImage}
            />
            <ProductInfo product={product} />
          </div>
          <ClothingsSlider title="Men's Clothings" />
        </div>
      </div>
    </div>
  );
};
