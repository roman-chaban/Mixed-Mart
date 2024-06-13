'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import type { FC } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  deleteProductWishlist,
} from '@/store/slices/wishlistSlice';
import styles from '@/app/wishlist/WishlistStyles.module.scss';
import { WishListCard } from '../WishlistCard/WishlistCard';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export const WishlistContainer: FC = () => {
  const wishlistCounter = useAppSelector(
    (state) => state.wishlist.wishlistCounter
  );
  const products = useAppSelector((state) => state.wishlist.wishlist);
  const dispatch = useAppDispatch();

  const handleDeleteProductToWishlist = (productId: number) => {
    dispatch(deleteProductWishlist(productId));
  };

  return (
    <div>
      <div className={styles.wishlist__nav}>
      <h3 className={styles.wishlist__title}>Wishlist ({wishlistCounter})</h3>
      <Link className={styles.home__link} href='/'>Go Home</Link>
      </div>
      <div className={styles.wishlistProducts}>
        {products.map((product) => (
          <WishListCard
            key={product.productId}
            product={product}
            onDeleteWishlistProductCard={() =>
              handleDeleteProductToWishlist(product.productId)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(WishlistContainer), {ssr: false});