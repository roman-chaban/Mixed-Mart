'use client';
import styles from '@/app/computers/ComputersStyles.module.scss';
import { Product } from '@/components/Product/Product';
import computers from '@/api/ultimateProducts/ultimateProducts.json';

interface ComputerProps {
  params: { productTitle: string };
}

export default function Computer({ params }: ComputerProps) {
  const productTitle = params?.productTitle || '';

  const filteredComputers = computers.filter(
    (product) =>
      product &&
      product.productTitle &&
      product.productTitle.toLowerCase() === productTitle.toLowerCase()
  );

  return (
    <section className={styles.computer}>
        {filteredComputers && <Product product={filteredComputers} />}
    </section>
  );
}
