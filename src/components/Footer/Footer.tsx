'use client';

import { FC, useState } from 'react';
import styles from './FooterStyles.module.scss';
import { Input } from '../ui/Input/Input';
import Image from 'next/image';
import { FooterListItem, footerList } from '@/common/footerList/footerList';
import { FooterListItems } from '../FooterListItems/FooterListItems';

export const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <nav className={styles.footer__nav}>
          <div className={styles.left__block}>
            <h2 className={styles.leftBlock__title}>Exclusive</h2>
            <p className={styles.leftBlock__subTitle}>Subscribe</p>
            <span className={styles.leftBlock__discount}>
              Get 10% off your first order
            </span>
            <label htmlFor='email' className={styles.footer__label}>
              <Input
                placeholder='Enter your email'
                className={styles.footer__input}
                name='email'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Image
                src='/images/footer/telegram-icon.svg'
                alt='telegram icon'
                width={22}
                height={20}
                className={styles.send__icon}
              />
            </label>
          </div>
          <ul className={styles.footer__menu}>
            {footerList.map((item: FooterListItem) => (
              <FooterListItems
                key={item.title}
                subTitles={item.subTitles}
                title={item.title}
              />
            ))}
          </ul>
          <div className={styles.footerSocial__block}>
            <h2 className={styles.download__title}>Download App</h2>
            <div className={styles.footerSocial__blockItems}>
              <p className={styles.social__save}>
                Save $3 with App New User Only
              </p>
              <div className={styles.footerSocial__banners}>
                <Image
                  src='./images/footer/code.svg'
                  alt='Qrcode image'
                  width={76}
                  height={76}
                />
                <div className={styles.footerSocial__phonesBanners}>
                  <Image
                    width={80}
                    height={30}
                    src='./images/footer/app-store.svg'
                    alt='App-Store image'
                  />
                  <Image
                    width={80}
                    height={30}
                    src='./images/footer/google-pay.svg'
                    alt='PlayMarket image'
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.footer__copyright}>
        &copy; Copyright 2024. All right reserved
      </div>
    </footer>
  );
};
