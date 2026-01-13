import type { Product } from '../types';
import { formatDateRange } from '../utils/dateUtils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="card-icon">
        <img src="/tombstone.svg" alt="" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-dates">
            {formatDateRange(product.dateOpen, product.dateClose)}
          </span>
          <span className="card-type">{product.type}</span>
        </div>
        <h2 className="card-title">
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            {product.name}
          </a>
        </h2>
        <p className="card-description">{product.description}</p>
      </div>
    </article>
  );
}
