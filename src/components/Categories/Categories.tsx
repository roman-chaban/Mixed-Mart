import styles from '@/components/Categories/CategoriesStyles.module.scss';
import { FC } from 'react';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';
import { CategoriesBlocks } from '../CategoriesBlocks/CategoriesBlocks';

export const Categories: FC = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.categories__container}>
        <div className={styles.categories__information}>
          <TitleBlock title='Category' />
          <div className={styles.categories__titles}>
            <h2 className={styles.category__title}>Browse By Category</h2>
          </div>
        </div>
        <CategoriesBlocks />
      </div>
    </section>
  );
};
