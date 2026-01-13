export type ProductType = 'company' | 'service' | 'product';

export interface Product {
  name: string;
  dateOpen: string;
  dateClose: string;
  description: string;
  link: string;
  type: ProductType;
}

export type FilterType = 'all' | ProductType;
