import { FC } from 'react';
import styles from './SideBarStyles.module.scss';
import { SideBarItem, sideBarItems } from '@/common/sideBarItems/sideBarItems';
import { SideBarItems } from '../SideBarItems/SideBarItems';

export const SideBar: FC = () => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBar__container}>
        <ul className={styles.menu}>
          {sideBarItems.map((link: SideBarItem) => (
            <SideBarItems key={link.href} link={link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
