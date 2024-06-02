import Link from 'next/link';
import { FC } from 'react';
import styles from '../Header/HeaderStyles.module.scss';

interface NavBarItemsProps {
  link: {
    label: string;
    href: string;
  };
}

export const NavBarItems: FC<NavBarItemsProps> = ({ link }) => {
  return (
    <li className={styles.menu__listItem}>
      <Link className={styles.menu__listLink} href={link.href}>{link.label}</Link>
    </li>
  );
};
