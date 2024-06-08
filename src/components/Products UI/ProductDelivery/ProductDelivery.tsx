import { FC } from 'react';
import styles from './ProductDeliveryStyles.module.scss';
import Image from 'next/image';
import { ProductDeliveryItems } from '@/interfaces/productDelivery';

export const ProductDelivery: FC<ProductDeliveryItems> = ({
  firstPoint,
  secondPoint,
}) => {
  return (
    <article className={styles.productDelivery__block}>
      <div className={styles.firstDelivery__block}>
        <Image
          priority
          width={40}
          height={40}
          src={firstPoint.icon}
          alt={`${firstPoint.title} icon`}
        />
        <div className={styles.delivery__titlesBlock}>
          <h3 className={styles.delivery__title}>{firstPoint.title}</h3>
          <p className={styles.delivery__subTitle}>{firstPoint.subTitle}</p>
        </div>
      </div>
      <div className={styles.secondDelivery__block}>
        <Image
          priority
          width={40}
          height={40}
          src={secondPoint.icon}
          alt={`${secondPoint.title} icon`}
        />
        <div className={styles.delivery__titlesBlock}>
          <h3 className={styles.delivery__title}>{secondPoint.title}</h3>
          <p className={`${styles.delivery__subTitle} ${styles.nonDecoration}`}>
            {secondPoint.subTitle}{' '}
            <span className={styles.delivery__markedUnderline}>Details</span>{' '}
          </p>
        </div>
      </div>
    </article>
  );
};
