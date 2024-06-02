import { FC } from 'react';
import styles from './HeroStyles.module.scss';
import { SideBar } from '../SideBar/SideBar';
import { HeroSlider } from '../HeroSlider/HeroSlider';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <SideBar />
        <HeroSlider />
      </div>
    </section>
  );
};
