'use client';

import { useItemCounter } from '@/hooks/useItemCounter';
import { useState, type FC } from 'react';
import styles from './CounterStyles.module.scss';

type TypeActiveButton = boolean;

export const ProductItemCounter: FC = () => {
  const [plusActiveButton, setPlusActiveButton] =
    useState<TypeActiveButton>(false);
  const [minusActiveButton, setMinusActiveButton] =
    useState<TypeActiveButton>(false);
  const initialProductItem = 0;
  const { productItemNumber, onAddProduct, onDeleteProduct } = useItemCounter({
    productItem: initialProductItem,
    onAddProduct: () => {},
    onDeleteProduct: () => {},
  });

  const handleAddProduct = () => {
    onAddProduct();
    setPlusActiveButton(true);
    setTimeout(() => setPlusActiveButton(false), 2000);
    setMinusActiveButton(false);
  };

  const handleDeleteProduct = () => {
    onDeleteProduct();
    setMinusActiveButton(true);
    setTimeout(() => setMinusActiveButton(false), 2000);
    setPlusActiveButton(false);
  };

  return (
    <div className={styles.counterItem}>
      <button
        className={`${styles.counterPlus} ${
          plusActiveButton ? styles.activePlus : ''
        }`}
        onClick={handleAddProduct}
        style={{ color: plusActiveButton ? 'white' : '' }}
      >
        +
      </button>
      <span className={styles.initialItem}>{productItemNumber}</span>
      <button
        className={`${styles.counterMinus} ${
          minusActiveButton ? styles.activeMinus : ''
        }`}
        onClick={handleDeleteProduct}
        style={{ color: minusActiveButton ? 'white' : '' }}
      >
        -
      </button>
    </div>
  );
};
