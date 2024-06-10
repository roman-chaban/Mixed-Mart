'use client';

import { useRef, type FC } from 'react';
import styles from './ArrivalStyles.module.scss';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';
import { ClothingsSlider } from '../Clothings UI/ClothingsSlider/ClothingsSlider';
import SliderButtons from '../SliderButtons/SliderButtons';
import { useAppSelector } from '@/hooks/useAppSelector';

export const Arrival: FC = () => {
  const { isNextDisabled, isPrevDisabled } = useAppSelector(
    (state) => state.slider
  );

  const swiperRef = useRef<any>(null);

  return (
    <section className={styles.arrival}>
      <div className={styles.arrival__container}>
        <div className={styles.arrivalTitle__block}>
          <TitleBlock title='Featured' />
          <h2 className={styles.arrival__title}>New Arrival</h2>
          <SliderButtons
            isNextDisabled={isNextDisabled}
            isPrevDisabled={isPrevDisabled}
            swiperRef={swiperRef}
          />
        </div>
      </div>
      <ClothingsSlider swiperRef={swiperRef} />
    </section>
  );
};
