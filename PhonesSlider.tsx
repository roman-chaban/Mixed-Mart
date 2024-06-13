'use client';

import { FC, useEffect, useRef, useState } from 'react';
import styles from '@/components/Products UI/ProductsSlider/ProductSliderStyles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import phones from '@/api/phones/phones.json';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNextDisabled, setPrevDisabled } from '@/store/slices/sliderSlice';
import { SliderButtons } from '@/components/SliderButtons/SliderButtons';
import { TitleBlock } from '@/components/ui/TitleBlock/TitleBlock';
import { ProductCard } from '@/components/Products UI/ProductCard/ProductCard';

interface ProductSliderProps {
  title: string;
}

export const PhonesSlider: FC<ProductSliderProps> = ({ title }) => {
  const [products, setProducts] = useState<UltimateProducts[]>(phones);
  const swiperRef = useRef<any>(null);
  const { isNextDisabled, isPrevDisabled } = useAppSelector(
    (state) => state.slider
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setProducts(phones);
  }, []);

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
  }, [dispatch]);

  return (
    <div className={styles.productsSlider}>
      <div className={styles.productSlider__container}>
        <div className={styles.slider}>
          <div className={styles.sliderNav}>
            {title && <TitleBlock title={title} />}
            <SliderButtons
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              swiperRef={swiperRef}
            />
          </div>
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
            {products.map((product) => (
              <SwiperSlide key={product.id} className={styles.slide}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
