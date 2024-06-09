'use client';

import { FC } from 'react';
import styles from '../../app/account/AccountStyles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AccountSideBar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.sideBar__nav}>
      <ul className={styles.account__menu}>
        <h3 className={styles.accountMenu__title}>Manage My Account</h3>
        <li
          className={`${styles.account__listItem} ${
            pathname === '/account' ? styles.active : ''
          }`}
        >
          <Link className={styles.account__listLink} href='/account'>
            My Profile
          </Link>
        </li>
        <li
          className={`${styles.account__listItem} ${
            pathname === '/account/address' ? styles.active : ''
          }`}
        >
          <Link className={styles.account__listLink} href='/account/address'>
            Address Book
          </Link>
        </li>
        <li
          className={`${styles.account__listItem} ${
            pathname === '/account/payment' ? styles.active : ''
          }`}
        >
          <Link className={styles.account__listLink} href='/account/payment'>
            My Payment Options
          </Link>
        </li>
      </ul>
      <ul className={styles.account__menu}>
        <h3 className={styles.accountMenu__title}>My Orders</h3>
        <li
          className={`${styles.account__listItem} ${
            pathname === '/account' ? styles.active : ''
          }`}
        >
          <Link className={styles.account__listLink} href='/account/returns'>
            My Returns
          </Link>
        </li>
        <li
          className={`${styles.account__listItem} ${
            pathname === '/account/address' ? styles.active : ''
          }`}
        >
          <Link
            className={styles.account__listLink}
            href='/account/cancellations'
          >
            My Cancellations
          </Link>
        </li>
      </ul>
      <h5 className={styles.wishlist__title}>My WishList</h5>
    </nav>
  );
};
