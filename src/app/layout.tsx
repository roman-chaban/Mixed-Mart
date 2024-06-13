import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/assets/layout.scss';
import Header from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Providers } from '@/store/provider/provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Mixed Mart | Home',
  description:
    'Mixed Merchandise Mart is a dynamic retail store offering a diverse range of products to meet the needs of all shoppers. From everyday essentials to unique specialty items, our selection includes home goods, electronics, clothing, beauty products, toys, and much more. Located in a convenient and accessible area, Mixed Merchandise Mart provides .',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className='main'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
