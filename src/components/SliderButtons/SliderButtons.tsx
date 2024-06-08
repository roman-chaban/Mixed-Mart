import { FC, RefObject } from 'react';
import styles from '@/components/ProductsSlider/ProductSliderStyles.module.scss';
import { FormNext, FormPrevious } from 'grommet-icons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNextDisabled, setPrevDisabled } from '@/store/slices/sliderSlice';

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
    swiperRef.current?.swiper?.slidePrev();
    dispatch(setNextDisabled(false));
  };

  const handleSlideNext = () => {
    swiperRef.current?.swiper?.slideNext();
    dispatch(setPrevDisabled(false));
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
