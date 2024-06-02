export interface FooterListItem {
  title: string;
  subTitles: Array<{ [key: string]: string }>;
  paths: Array<{ [key: string]: string }>;
}


export const footerList: FooterListItem[] = [
  {
    title: 'Support',
    subTitles: [
      {
        Address: '111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.',
        Email: 'roman.chaban1001@gmail.com',
        Phone: '+380637056082',
      },
    ],
    paths: [
      {
        Address: '',
        Email: 'mailto:roman.chaban1001@gmail.com',
        Phone: 'tel:+380637056082',
      },
    ],
  },
  {
    title: 'Account',
    subTitles: [
      {
        'My Account': '/my-account',
        'Login / Register': '/login',
        Cart: '/cart',
        Wishlist: '/wishlist',
        Shop: '/shop',
      },
    ],
    paths: [],
  },
  {
    title: 'Quick Link',
    subTitles: [
      {
        'Privacy Policy': '/privacy-policy',
        'Terms Of Use': '/terms-of-use',
        FAQ: '/faq',
        Contact: '/contact',
      },
    ],
    paths: [],
  },
];