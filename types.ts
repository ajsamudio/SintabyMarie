export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface SubNavItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean; // For 'SALE'
  children?: SubNavItem[];
}