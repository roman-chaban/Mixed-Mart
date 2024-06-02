import { FC } from 'react';
import styles from '../../Sales/SalesStyles.module.scss';

interface TitleBlockProps {
  title: string;
}

export const TitleBlock: FC<TitleBlockProps> = ({ title }) => {
  return (
    <div className={styles.sales__descriptionBlock}>
      <span className={styles.sales__decoration}></span>
      <h4 className={styles.sales__subTitle}>{title}</h4>
    </div>
  );
};
