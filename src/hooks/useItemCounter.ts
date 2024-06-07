import { useState, useCallback } from 'react';

interface ItemCounterProps {
  productItem: number;
  onAddProduct: () => void;
  onDeleteProduct: () => void;
}

export const useItemCounter = ({ productItem }: ItemCounterProps) => {
  const [productItemNumber, setProductItemNumber] = useState<number>(0);

  const onAddProduct = useCallback(() => {
    setProductItemNumber((prevProductItem) => (prevProductItem += 1));
  }, []);

  const onDeleteProduct = useCallback(() => {
    if (productItemNumber < 1) return;
    setProductItemNumber((prevProductItem) => (prevProductItem -= 1));
  }, [productItemNumber]);

  return {
    productItem: productItem * productItemNumber,
    onAddProduct,
    onDeleteProduct,
  };
};
