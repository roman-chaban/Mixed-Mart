'use client';

import { useEffect, useRef, useState, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import { MensFashionProducts } from '@/interfaces/mens-fashion';
import clothingsProducts from '@/api/mensFashion/mensFashion.json';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNextDisabled, setPrevDisabled } from '@/store/slices/sliderSlice';
import { ProductCard } from '@/components/Clothings UI/ProductCard/ProductCard';
import styles from './ClothingsSliderStyles.module.scss';

interface ClothingsSliderProps {
  swiperRef: React.RefObject<any>;
}

export const ClothingsSlider: FC<ClothingsSliderProps> = ({ swiperRef }) => {
  const [clothings, setClothings] =
    useState<MensFashionProducts>(clothingsProducts);

  const { isNextDisabled, isPrevDisabled } = useAppSelector(
    (state) => state.slider
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setClothings(clothings);
  }, [clothings]);

  const updateNavigationButtons = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      dispatch(setNextDisabled(swiper.isBeginning));
      dispatch(setPrevDisabled(swiper.isEnd));
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    updateNavigationButtons();
    if (swiperInstance) {
      swiperInstance.on('slideChange', updateNavigationButtons);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateNavigationButtons);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        className={styles.swiper__wrapper}
        spaceBetween={20}
        speed={1000}
        loop={false}
        allowSlideNext={!isPrevDisabled}
        allowSlidePrev={!isNextDisabled}
        style={{ cursor: 'grab' }}
        onSlideChange={updateNavigationButtons}
      >
        <div className={styles.productCards}>
          {clothings.map((clothing, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <ProductCard product={clothing} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
