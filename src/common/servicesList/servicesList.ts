export interface ServicesListItem {
  title: string;
  subTitle: string;
  icon: string;
}

export const servicesList: ServicesListItem[] = [
  {
    title: 'FREE AND FAST DELIVERY',
    subTitle: 'Free delivery for all orders over $140',
    icon: './images/services/icon-delivery.svg',
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    subTitle: 'Friendly 24/7 customer support',
    icon: './images/services/icon-secure.svg',
  },
  {
    title: 'MONEY BACK GUARANTEE',
    subTitle: 'We return money within 30 days',
    icon: './images/services/icon-service.svg',
  },
];
