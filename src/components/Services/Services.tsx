import type { FC } from 'react';
import styles from './ServicesStyles.module.scss';
import { ServicesItem } from '../ServicesItem/ServicesItem';

export const Services: FC = () => {
  return (
    <section className={[styles.services].join(`${styles.not__padding}`)}>
      <div className={styles.services__container}>
        <ServicesItem />
      </div>
    </section>
  );
};
