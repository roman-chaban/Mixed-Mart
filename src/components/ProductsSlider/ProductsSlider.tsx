'use client';

import { FC, useEffect, useRef, useState } from 'react';
import styles from './ProductSliderStyles.module.scss';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import { FormNext, FormPrevious } from 'grommet-icons';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import ultimateProducts from '@/api/ultimateProducts/ultimateProducts.json';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductSliderProps {
  title: string;
}

export const ProductSlider: FC<ProductSliderProps> = ({ title }) => {
  const [products, setProducts] =
    useState<UltimateProducts[]>(ultimateProducts);
  const swiperRef = useRef<any>(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const updateNavigationButtons = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
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
  }, []);

  return (
    <div className={styles.productsSlider}>
      <div className={styles.productSlider__container}>
        <div className={styles.slider}>
          <div className={styles.sliderNav}>
            {title.length === 0 ? '' : <TitleBlock title={title} />}
          </div>
          <Swiper
            ref={swiperRef}
            className={styles.swiper__wrapper}
            spaceBetween={20}
            speed={1000}
            loop={false}
            allowSlideNext={!isNextDisabled}
            allowSlidePrev={!isPrevDisabled}
            style={{ cursor: 'grab' }}
            onSlideChange={updateNavigationButtons}
          >
            <div className={styles.productCards}>
              {products.map((product, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
