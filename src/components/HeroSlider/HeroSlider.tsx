'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Apple, FormNextLink } from 'grommet-icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSliderStyles.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HeroSlider: FC = () => {
  return (
    <div className={styles.heroSlider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        style={{ display: 'flex', cursor: 'grab' }}
      >
        <SwiperSlide>
          <div className={styles.heroSlider__container}>
            <div className={styles.heroSlider__information}>
              <div className={styles.heroSlider__logo}>
                <Apple color='white' style={{ width: 40, height: 40 }} />
                <h3 className={styles.heroSlider__title}>
                  Apple MacBook Pro 14 M3
                </h3>
              </div>
              <h2 className={styles.heroSlider__discount}>
                Up to 15% off Voucher
              </h2>
              <Link className={styles.heroSlider__link} href='/Shop'>
                Shop now! <FormNextLink color='white' />
              </Link>
            </div>
            <div
              className={[
                styles.heroSlider__block,
                styles.heroSlider__first,
              ].join(' ')}
            >
              <Image
                priority
                className={styles.heroSlider__image}
                src='/images/hero/macbook-pro.jpg'
                alt='hero image'
                width={396}
                height={344}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.heroSlider__container}>
            <div className={styles.heroSlider__information}>
              <div className={styles.heroSlider__logo}>
                <Apple color='white' style={{ width: 40, height: 40 }} />
                <h3 className={styles.heroSlider__title}>iPhone 14 Pro</h3>
              </div>
              <h2 className={styles.heroSlider__discount}>Exclusive Offer</h2>
              <Link className={styles.heroSlider__link} href='/Shop'>
                Shop now! <FormNextLink color='white' />
              </Link>
            </div>
            <div className={styles.heroSlider__block}>
              <Image
                priority
                className={styles.heroSlider__image}
                src='/images/hero/hero.svg'
                alt='hero image'
                width={496}
                height={344}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.heroSlider__container}>
            <div className={styles.heroSlider__information}>
              <div className={styles.heroSlider__logo}>
                <Apple color='white' style={{ width: 40, height: 40 }} />
                <h3 className={styles.heroSlider__title}>iPhone 14 Mini</h3>
              </div>
              <h2 className={styles.heroSlider__discount}>Special Discount</h2>
              <Link className={styles.heroSlider__link} href='/Shop'>
                Shop now! <FormNextLink color='white' />
              </Link>
            </div>
            <div className={styles.heroSlider__block}>
              <Image
                priority
                className={styles.heroSlider__image}
                src='/images/hero/hero.svg'
                alt='hero image'
                width={496}
                height={344}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
