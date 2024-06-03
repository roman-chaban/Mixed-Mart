'use client';

import { FC, useState } from 'react';
import styles from './HeaderStyles.module.scss';
import { HeaderBanner } from '../HeaderBanner/HeaderBanner';
import { NavBarItems } from '../NavBarItems/NavBarItems';
import { NavItem, navItems } from '@/common/navItems/navItems';
import { Input } from '../ui/Input/Input';
import { Basket, Favorite, Search } from 'grommet-icons';
import { SearchValue } from '@/types/types';

export const Header: FC = () => {
  const [searchValue, setSearchValue] = useState<SearchValue>('');
  return (
    <header className={styles.header}>
      <HeaderBanner />
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <h3 className={styles.logoTitle}>Mixed Mart</h3>
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
          <div className={styles.favorite__block}>
            <Favorite className={styles.icon} color='black' />
            <span className={styles.icon__counter}>0</span>
          </div>
          <div className={styles.basket__block}>
            <Basket className={styles.icon} color='black' />
            <span className={styles.icon__counter}>0</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
