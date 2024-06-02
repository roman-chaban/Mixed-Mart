import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/assets/layout.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Tech Wave | Home',
  description:
    "Discover the future of technology at Tech Wave, your one-stop online shop for all things tech. We offer a wide range of cutting-edge gadgets, high-performance electronics, and innovative accessories to meet all your digital needs. Whether you're a tech enthusiast, a gamer, or simply looking to upgrade your home or office, Tech Wave has something for everyone.",
  icons: './favicon/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
