import { FC } from 'react';
import styles from './HeaderBannerStyles.module.scss';
import Link from 'next/link';

export const HeaderBanner: FC = () => {
  return (
    <div className={styles.headerBanner}>
      <div className={styles.headerBanner__container}>
        <span className={styles.topTitle}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href='/Shop' className={styles.link}>ShopNow</Link>
        </span>
      </div>
    </div>
  );
};
