'use client';

import styles from '@/assets/notFound.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import Link from 'next/link';

export default function NotFound() {
  useChangePageTitle('Mixed Mart | 404 Not Found');
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__container}>
        <div>
          <Link className={styles.redirect__link} href='/'>
            Home
          </Link>{' '}
          / 404 Error
        </div>
        <div className={styles.notFound__titles}>
          <h1 className={styles.notFound__title}>404 Not Found</h1>
          <p className={styles.notFound__subTitle}>
            Your visited page not found.{' '}
            <Link className={styles.notFound__link} href='/'>
              You may go home page.
            </Link>
          </p>
          <Button type='button' className={styles.notFound__button}>
            <Link href='/' className={styles.notFound__buttonLink}>
              Back to home page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
