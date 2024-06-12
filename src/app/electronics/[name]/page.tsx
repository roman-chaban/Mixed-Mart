'use client';

import phones from '@/api/phones/phones.json';
import { Product } from '@/components/Products UI/Product/Product';
import {
  TypeUltimateProducts,
  UltimateProducts,
} from '@/interfaces/ultimateProducts';

interface PhoneProps {
  params: { name: string };
}

// export async function generateMetadata({ params: { name } }: PhoneProps) {
//   return {
//     title: name.replaceAll('-', ' '),
//   };
// }

export default function Phone({ params: { name } }: PhoneProps) {
  const filteredPhone = phones.find((phone) => phone.name === name);

  console.log(filteredPhone);
  console.log(phones[0].title);

  return (
    <div>
      <Product product={filteredPhone as unknown as TypeUltimateProducts} />
    </div>
  );
}
