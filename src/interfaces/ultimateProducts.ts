export interface ProductImages {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

export interface UltimateProducts {
  title: string;
  name: string;
  productRating: number;
  priceDiscount: string;
  price: string;
  productId: number;
  id: number;
  color?: string;
  capacity?: number;
  memory?: string;
  displaySize?: string;
  category: string;
  about?: string;
  style?: string;
  subStyle?: string;
  mainImage: string;
  images: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  }[];
}

export type TypeUltimateProducts = UltimateProducts[];
