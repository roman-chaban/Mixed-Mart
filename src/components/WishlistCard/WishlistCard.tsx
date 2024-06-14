'use client';

import { UltimateProducts } from '@/interfaces/ultimateProducts';
import type { FC } from 'react';
import styles from './WishlistStyle.module.scss';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';
import { Close, Star } from 'grommet-icons';
import Link from 'next/link';

interface WishListCardProps {
  product: UltimateProducts;
  onDeleteWishlistProductCard: () => void;
}

export const WishListCard: FC<WishListCardProps> = ({
  product,
  onDeleteWishlistProductCard,
}) => {
  const parseDiscount = (discount: string | number): number => {
    if (typeof discount === 'string') {
      return parseFloat(discount.replace(/\s+/g, ''));
    }
    return discount;
  };

  const calculatePercentDiscount = (
    originalPrice: number,
    discountPrice: number
  ): string => {
    return (((originalPrice - discountPrice) / originalPrice) * 100).toFixed(2);
  };

  const renderPriceDiscount = (product: UltimateProducts): string => {
    const discount = parseDiscount(product.priceDiscount);
    const price = parseDiscount(product.price);

    if (discount === 0) {
      return '';
    } else if (discount >= 5000) {
      return `${discount} ₴`;
    } else {
      return `${calculatePercentDiscount(price, discount)}%`;
    }
  };

  return (
    <div className={styles.wishlist__card}>
      <div className={styles.card__discount_delete}>
        <span
          className={styles.card__discount}
          style={{
            background: Number(product.priceDiscount) === 0 ? '' : '#db4444',
          }}
        >
          {renderPriceDiscount(product)}
        </span>
        <Button
          type='button'
          onClick={onDeleteWishlistProductCard}
          className={styles.card__deleteButton}
        >
          <Close color='white' style={{ width: 15, height: 15 }} />
        </Button>
      </div>
      <Image
        className={styles.wishlist__image}
        src={product.mainImage}
        alt={product.title}
        width={230}
        height={250}
      />
      <div className={styles.card__title_prices}>
        <h3 className={styles.card__title}>{product.title}</h3>
        <div className={styles.prices}>
          <h5 className={styles.card__price}>
            {!product.priceDiscount ? product.price : product.priceDiscount}$
          </h5>
          <h5 className={styles.card__priceDiscount}>
            {+!product.priceDiscount ? '' : product.price}
            {!product.priceDiscount ? '' : '$'}
          </h5>
        </div>
        <div className={styles.wishlist__productRating}>
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />
          <Star color='plain' />({product.productRating})
        </div>
        <Button type='button' className={styles.view__button}>
          <Link
            className={styles.view___link}
            href={`/${product.category}/${product.title.replaceAll(' ', '-')}`}
          >
            View product
          </Link>
        </Button>
      </div>
    </div>
  );
};
