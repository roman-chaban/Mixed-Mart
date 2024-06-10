export interface mensFashionItem {
  productId: number;
  title: string;
  name: string;
  category: string;
  price: number;
  productRating: number;
  priceDiscount: number;
  subStyle: string;
  style: string;
  about: string;
  mainImage: string;
  images: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  }[];
}

export type MensFashionProducts = mensFashionItem[];
