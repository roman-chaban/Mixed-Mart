import { Categories } from '@/components/Categories/Categories';
import { Hero } from '@/components/Hero/Hero';
import Sales from '@/components/Sales/Sales';

export default function Home() {
  return (
    <div>
      <Hero />
      <Sales />
      <Categories />
    </div>
  );
}
