export interface ProductDeliveryItems {
  firstPoint: {
    icon: string;
    title: string;
    subTitle: string;
  };
  secondPoint: {
    icon: string;
    title: string;
    subTitle: string;
  };
}

export const productDeliveryItems: ProductDeliveryItems = {
  firstPoint: {
    icon: '/images/delivery/first.svg',
    title: 'Free Delivery',
    subTitle: 'Enter your postal code for Delivery Availability',
  },
  secondPoint: {
    icon: '/images/delivery/second.svg',
    title: 'Return Delivery',
    subTitle: 'Free 30 Days Delivery Returns.',
  },
};
