"use client";

import { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroup {
  label: string;
  options: FilterOption[];
}

interface FilterBarProps {
  groups: FilterGroup[];
  onFilterChange?: (filters: Record<string, string>) => void;
}

export default function FilterBar({ groups, onFilterChange }: FilterBarProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const handleFilter = (groupLabel: string, value: string) => {
    const next = { ...activeFilters };
    if (next[groupLabel] === value) {
      delete next[groupLabel];
    } else {
      next[groupLabel] = value;
    }
    setActiveFilters(next);
    onFilterChange?.(next);
  };

  const clearAll = () => {
    setActiveFilters({});
    onFilterChange?.({});
  };

  const hasActive = Object.keys(activeFilters).length > 0;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {groups.map((group) => (
        <div key={group.label} className="flex flex-wrap items-center gap-2">
          {group.options.map((option) => {
            const isActive = activeFilters[group.label] === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleFilter(group.label, option.value)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-gulf-blue text-white border-gulf-blue"
                    : "bg-white text-slate border-mist-border hover:border-gulf-blue hover:text-gulf-blue"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      ))}
      {hasActive && (
        <button
          onClick={clearAll}
          className="px-4 py-2 text-[13px] font-medium text-driftwood hover:text-slate transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
