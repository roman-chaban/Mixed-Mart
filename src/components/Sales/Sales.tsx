'use client';

import { FC } from 'react';
import styles from './SalesStyles.module.scss';
import dynamic from 'next/dynamic';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { FormNext, FormPrevious } from 'grommet-icons';

const Sales: FC = () => {
  const endDate = new Date('2024-06-10T00:00:00Z');
  const timeRemaining = useCountdownTimer(endDate);

  return (
    <section className={styles.sales}>
      <div className={styles.sales__container}>
        <div className={styles.sales__informationBlock}>
          <div className={styles.sales__descriptionBlock}>
            <span className={styles.sales__decoration}></span>
            <h4 className={styles.sales__subTitle}>Today’s</h4>
          </div>
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
            <div className={styles.slider__buttons}>
              <button type='button' className={styles.next__button}>
                <FormPrevious />
              </button>
              <button type='button' className={styles.prev__button}>
                <FormNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Sales), { ssr: false });
