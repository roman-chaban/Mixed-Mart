import computers from '@/api/ultimateProducts/ultimateProducts.json';
import { Product } from '@/components/Product/Product';

interface ComputerProps {
  params: { title: string };
}

export async function generateMetadata({ params: { title } }: ComputerProps) {
  return {
    title: title,
  };
}

export default function Computer({ params: { title } }: ComputerProps) {
  const filteredComputers = computers.filter(
    (computer) => computer.productTitle === title
  );

  return (
    <div>
      <Product products={filteredComputers} />
    </div>
  );
}
