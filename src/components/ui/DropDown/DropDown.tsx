'use client';

import { FC, useEffect, useRef } from 'react';
import styles from './DropDownStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface DropDownProps {
  isMenuOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const DropDown: FC<DropDownProps> = ({
  isMenuOpen,
  onToggle,
  onClose,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropDownRef,
    onClose,
    isMenuOpen,
  });

  return (
    <div
      className={styles.dropDown__container}
      onClick={onToggle}
      ref={dropDownRef}
    >
      <ul
        className={`${styles.dropDown__menu} ${isMenuOpen ? styles.open : ''}`}
      >
        {isMenuOpen && (
          <>
            <li className={styles.menu__listItem}>
              <Image src='/icons/user.svg' alt='' width={32} height={32} />
              <span className={styles.listItem__title}>
                <Link style={{ color: '#fff' }} href='/account'>
                  Manage My Account
                </Link>
              </span>
            </li>
            <li className={styles.menu__listItem}>
              <Image src='/icons/order.svg' alt='' width={24} height={24} />
              <span className={styles.listItem__title}>My Order</span>
            </li>
            <li className={styles.menu__listItem}>
              <Image src='/icons/cancel.svg' alt='' width={24} height={24} />
              <span className={styles.listItem__title}>My Cancellations</span>
            </li>
            <li className={styles.menu__listItem}>
              <Image src='/icons/star.svg' alt='' width={26} height={26} />
              <span className={styles.listItem__title}>My Reviews</span>
            </li>
            <li className={styles.menu__listItem}>
              <Image src='/icons/logOut.svg' alt='' width={22} height={22} />
              <span className={styles.listItem__title}>Logout</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
