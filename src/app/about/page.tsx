import type { Metadata } from 'next';
import styles from './AboutStyles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Services } from '@/components/Services/Services';

export const metadata: Metadata = {
  title: 'Mixed Mart | About',
};

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__navBlock}>
          <div className={styles.about__titles}>
            <Link href='/' className={styles.home__link}>
              Home
            </Link>
            <h5 className={styles.about__title}>About</h5>
          </div>
        </div>
        <article className={styles.about__info}>
          <Image
            src='/images/about/about.svg'
            alt='About Banner Image'
            width={500}
            height={500}
            className={styles.aboutImage}
          />
          <div className={styles.aboutInfo__titles}>
            <h1 className={styles.aboutInfo__title}>Mixed Merchandise Mart</h1>
            <p className={styles.aboutInfo__subTitle}>
              Mixed Merchandise Mart is a dynamic retail store offering a
              diverse range of products to meet the needs of all shoppers. From
              everyday essentials to unique specialty items, our selection
              includes home goods, electronics, clothing, beauty products, toys,
              and much more. Located in a convenient and accessible area, Mixed
              Merchandise Mart provides a one-stop shopping experience with
              competitive prices and exceptional customer service. Our
              well-organized aisles and knowledgeable staff make it easy for
              customers to find exactly what they&apos;re looking for. Whether
              you&apos;re stocking up on household necessities or searching for
              the perfect gift, Mixed Merchandise Mart has something for
              everyone.
            </p>
          </div>
        </article>
        <div className={styles.services__notPad}>
          <Services />
        </div>
      </div>
    </section>
  );
}
