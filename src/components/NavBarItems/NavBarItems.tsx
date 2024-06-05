import Link from 'next/link';
import { FC } from 'react';
import styles from '../Header/HeaderStyles.module.scss';

interface NavBarItemsProps {
  link: {
    label: string;
    href: string;
  };
  active: string;
}

export const NavBarItems: FC<NavBarItemsProps> = ({ link, active }) => {
  return (
    <li className={styles.menu__listItem}>
      <Link
        className={`${styles.menu__listLink} ${
          link.href === active ? styles.active : ''
        }`}
        href={link.href}
      >
        {link.label}
      </Link>
    </li>
  );
};
