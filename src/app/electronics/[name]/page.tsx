import phones from '@/api/phones/phones.json';
import { Product } from '@/components/Products UI/Product/Product';
import {
  TypeUltimateProducts,
  UltimateProducts,
} from '@/interfaces/ultimateProducts';

interface PhoneProps {
  params: { name: string };
}

export async function generateMetadata({ params: { name } }: PhoneProps) {
  return {
    title: name.replaceAll('-', ' '),
  };
}

export default function Phone({ params: { name } }: PhoneProps) {
  const filteredPhone = phones.find((phone) => phone.name === name);

  return (
    <div>
      <Product
        categoryTitle='Phones'
        product={filteredPhone as unknown as UltimateProducts}
      />
    </div>
  );
}
