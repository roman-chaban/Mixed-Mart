export interface ProductImages<T, V, K, U, O> {
  first: T;
  second: V;
  third: K;
  four: U;
  five: O;
}

export type TypeProductImages = ProductImages<
  string,
  string,
  string,
  string,
  string
>[];

export type TypeUltimateProducts = UltimateProducts[];

export interface UltimateProducts {
  productTitle: string;
  productRating: number;
  productDiscount: string;
  productPrice: string;
  productId: number;
  productImage: string;
  productCategory: string;
  productImages: TypeProductImages;
}