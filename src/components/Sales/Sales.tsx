'use client';

import { FC, useEffect, useRef, useState } from 'react';
import styles from './SalesStyles.module.scss';
import dynamic from 'next/dynamic';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { FormNext, FormPrevious } from 'grommet-icons';
import { TitleBlock } from '../ui/TitleBlock/TitleBlock';
import { ProductCard } from '../ProductCard/ProductCard';
import { UltimateProducts } from '@/interfaces/ultimateProducts';
import ultimateProducts from '@/api/ultimateProducts/ultimateProducts.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';

const Sales: FC = () => {
  const swiperRef = useRef<any>(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [products, setProducts] =
    useState<UltimateProducts[]>(ultimateProducts);
  const endDate = new Date('2024-06-10T00:00:00Z');
  const timeRemaining = useCountdownTimer(endDate);

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

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <section className={styles.sales}>
      <div className={styles.sales__container}>
        <div className={styles.sales__informationBlock}>
          <TitleBlock title='Today’s' />
          <div className={styles.sales__titlesBlock}>
            <div className={styles.salesBlock}>
              <h2 className={styles.sales__title}>Flash Sales</h2>
              <div className={styles.discountTime__block}>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Days</span>
                  {timeRemaining.days}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Hours</span>
                  {timeRemaining.hours}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Minutes</span>
                  {timeRemaining.minutes}{' '}
                </p>
                <p className={styles.time__capture}>
                  <span className={styles.time__label}>Seconds</span>
                  {timeRemaining.seconds}{' '}
                </p>
              </div>
            </div>
            <div className={styles.slider__buttons}>
              <button
                type='button'
                className={styles.next__button}
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                disabled={isPrevDisabled}
              >
                <FormPrevious />
              </button>
              <button
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                disabled={isNextDisabled}
                type='button'
                className={styles.prev__button}
              >
                <FormNext />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          className={styles.swiper__wrapper}
          spaceBetween={20}
          speed={900}
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
    </section>
  );
};

export default dynamic(() => Promise.resolve(Sales), { ssr: false });
