import { Arrival } from '@/components/Arrival/Arrival';
import { Categories } from '@/components/Categories/Categories';
import { Hero } from '@/components/Hero/Hero';
import Sales from '@/components/Sales/Sales';
import { Services } from '@/components/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Categories />
      <Arrival />
      <Services />
    </>
  );
}
