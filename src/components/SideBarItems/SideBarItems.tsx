import { FC } from 'react';
import styles from '../SideBar/SideBarStyles.module.scss';
import Link from 'next/link';

interface SideBarItemsProps {
  link: {
    label: string;
    href: string;
  };
}

export const SideBarItems: FC<SideBarItemsProps> = ({ link }) => {
  return (
    <li className={styles.menu__listItem}>
      <Link className={styles.menu__listLink} href={link.href}>
        {link.label}
      </Link>
    </li>
  );
};
