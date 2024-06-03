import type { FC } from 'react';
import styles from './ArrivalStyles.module.scss';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';

export const Arrival: FC = () => {
  return (
    <section className={styles.arrival}>
      <div className={styles.arrival__container}>
        <div className={styles.arrivalTitle__block}>
          <TitleBlock title='Featured' />
          <h2 className={styles.arrival__title}>New Arrival</h2>
        </div>
      </div>
    </section>
  );
};
