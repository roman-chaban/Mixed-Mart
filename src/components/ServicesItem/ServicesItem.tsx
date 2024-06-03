import {
  servicesList,
  ServicesListItem,
} from '@/common/servicesList/servicesList';
import styles from '@/components/Services/ServicesStyles.module.scss';
import Image from 'next/image';
import type { FC } from 'react';

export const ServicesItem: FC = () => {
  return (
    <div className={styles.services__items}>
      {servicesList.map((item: ServicesListItem) => (
        <div key={item.title} className={styles.services__item}>
          <div className={styles.servicesImage__block}>
            <Image
              className={styles.servicesItem__image}
              src={item.icon}
              alt='services icon'
              width={45}
              height={45}
            />
          </div>
          <h2 className={styles.servicesItem__title}>{item.title}</h2>
          <p className={styles.servicesItem__subTitle}>{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
};
