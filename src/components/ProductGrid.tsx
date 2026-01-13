import type { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <main className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </main>
  );
}
