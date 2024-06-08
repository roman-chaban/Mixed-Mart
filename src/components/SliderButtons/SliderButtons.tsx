import { FormNext, FormPrevious } from 'grommet-icons';
import { FC, RefObject } from 'react';
import styles from '@/components/Product/ProductStyles.module.scss';

interface SliderButtonsProps {
  swiperRef: RefObject<any>;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const SliderButtons: FC<SliderButtonsProps> = ({
  isNextDisabled,
  isPrevDisabled,
  swiperRef,
}) => {
  return (
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
  );
};
