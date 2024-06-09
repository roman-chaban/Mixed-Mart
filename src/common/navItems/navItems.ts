export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Sign Up',
    href: '/auth/SignUp',
  },
  {
    label: 'Sign In',
    href: '/auth/SignIn',
  },
];
