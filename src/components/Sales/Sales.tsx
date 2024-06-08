'use client';

import { FC, useEffect, useRef } from 'react';
import styles from './SalesStyles.module.scss';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';
import { setNextDisabled, setPrevDisabled } from '@/store/slices/sliderSlice';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { ProductSlider } from '../ProductsSlider/ProductsSlider';

const Sales: FC = () => {
  const endDate = new Date('2024-06-18T00:00:00Z');
  const timeRemaining = useCountdownTimer(endDate);

  return (
    <section className={styles.sales}>
      <div className={styles.sales__container}>
        <div className={styles.sales__informationBlock}>
          <TitleBlock title='Today’s' />
          <div className={styles.sales__titlesBlock}>
            <div className={styles.salesBlock}>
              <h2 className={styles.sales__title}>Flash Sales</h2>
              <div className={styles.discountTime__block}>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Days</span>
                  {timeRemaining.days}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Hours</span>
                  {timeRemaining.hours}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Minutes</span>
                  {timeRemaining.minutes}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Seconds</span>
                  {timeRemaining.seconds}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductSlider title='' />
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Sales), { ssr: false });
