import { FC, RefObject } from 'react';
import styles from '@/components/Products UI/ProductsSlider/ProductSliderStyles.module.scss';
import { FormNext, FormPrevious } from 'grommet-icons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNextDisabled, setPrevDisabled } from '@/store/slices/sliderSlice';
import dynamic from 'next/dynamic';

interface SliderButtonsProps {
  swiperRef: RefObject<any>;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

export const SliderButtons: FC<SliderButtonsProps> = ({
  swiperRef,
  isNextDisabled,
  isPrevDisabled,
}) => {
  const dispatch = useAppDispatch();

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      dispatch(setPrevDisabled(false));
      dispatch(setNextDisabled(false));
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      dispatch(setNextDisabled(false));
      dispatch(setPrevDisabled(false));
    }
  };

  return (
    <div className={styles.slider__buttons}>
      <button
        type='button'
        className={styles.prev__button}
        onClick={handleSlidePrev}
        disabled={isPrevDisabled}
      >
        <FormPrevious />
      </button>
      <button
        type='button'
        className={styles.next__button}
        onClick={handleSlideNext}
        disabled={isNextDisabled}
      >
        <FormNext />
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SliderButtons), { ssr: false });
