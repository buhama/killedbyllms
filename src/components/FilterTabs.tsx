import type { FilterType } from '../types';

interface FilterTabsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    company: number;
    service: number;
    product: number;
  };
}

export function FilterTabs({ currentFilter, onFilterChange, counts }: FilterTabsProps) {
  const tabs: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'company', label: 'Companies' },
    { key: 'service', label: 'Services' },
    { key: 'product', label: 'Products' },
  ];

  return (
    <nav className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`filter-tab ${currentFilter === tab.key ? 'active' : ''}`}
          onClick={() => onFilterChange(tab.key)}
        >
          {tab.label} ({counts[tab.key]})
        </button>
      ))}
    </nav>
  );
}
