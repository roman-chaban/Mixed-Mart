import { Product } from '@/components/Product/Product';
import styles from '../ComputersStyles.module.scss';
import computers from '@/api/ultimateProducts/ultimateProducts.json';
import { UltimateProducts } from '@/interfaces/ultimateProducts';

interface LaptopProps {
  params: { name: string };
}

export async function generateMetadata({ params: { name } }: LaptopProps) {
  return {
    title: name.replaceAll('-', ' '),
  };
}

export default function Laptop({ params: { name } }: LaptopProps) {
  const filteredComputer = computers.find((product) => product.name === name);

  return (
    <section className={styles.laptop}>
      <Product product={filteredComputer as UltimateProducts} />
    </section>
  );
}
