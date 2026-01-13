import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterTabs } from './components/FilterTabs';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import graveyardData from './data/graveyard.json';
import type { Product, FilterType } from './types';
import './styles.css';

const products: Product[] = graveyardData;

function App() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.type === filter);
  }, [filter]);

  const counts = useMemo(() => ({
    all: products.length,
    company: products.filter((p) => p.type === 'company').length,
    service: products.filter((p) => p.type === 'service').length,
    product: products.filter((p) => p.type === 'product').length,
  }), []);

  return (
    <>
      <Header />
      <FilterTabs
        currentFilter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />
      <ProductGrid products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
