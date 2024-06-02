'use client';

import { FC, useState } from 'react';
import styles from './HeaderStyles.module.scss';
import { HeaderBanner } from '../HeaderBanner/HeaderBanner';
import { NavBarItems } from '../NavBarItems/NavBarItems';
import { NavItem, navItems } from '@/common/navItems/navItems';
import { Input } from '../ui/Input/Input';
import { Basket, Favorite, Search, Shop } from 'grommet-icons';
import { SearchValue } from '@/types/types';

export const Header: FC = () => {
  const [searchValue, setSearchValue] = useState<SearchValue>('');
  return (
    <header className={styles.header}>
      <HeaderBanner />
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <h3 className={styles.logoTitle}>Tech Wave</h3>
          <Shop color='black' />
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.nav__menu}>
            {navItems.map((link: NavItem) => (
              <NavBarItems key={link.href} link={link} />
            ))}
          </ul>
          <label htmlFor='search' className={styles.searchLabel}>
            <Input
              value={searchValue}
              setValue={(event) => setSearchValue(event.target.value)}
              name='search'
              type='text'
              id='search'
              placeholder='What are you looking for?'
              className={styles.searchInput}
            />
            <Search color='black' style={{ width: 20, height: 20 }} />
          </label>
          <Favorite className={styles.icon} color='black' />
          <Basket className={styles.icon} color='black' />
        </nav>
      </div>
    </header>
  );
};
