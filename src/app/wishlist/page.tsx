import type { Metadata } from 'next';
import styles from './WishlistStyles.module.scss';
import WishlistContainer from '@/components/WishlistContainer/WishlistContainer';

export const metadata: Metadata = {
  title: 'Mixed Mart | Wishlist',
};

export default function WishList() {
  return (
    <section className={styles.wishlist}>
      <div className={styles.wishlist__container}>
        <WishlistContainer />
      </div>
    </section>
  );
}
