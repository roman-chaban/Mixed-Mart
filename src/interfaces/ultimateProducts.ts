export interface ProductImages {
  first: string;
  second: string;
  third: string;
  four: string;
  five: string;
}

export interface UltimateProducts {
  title: string;
  name: string;
  rating: number;
  discount: string;
  price: string;
  productId: number;
  id: number;
  category: string;
  image: string;
  productImages: {
    first: string;
    second: string;
    third: string;
    four: string;
    five: string;
  }[];
}

export type TypeUltimateProducts = UltimateProducts[];
