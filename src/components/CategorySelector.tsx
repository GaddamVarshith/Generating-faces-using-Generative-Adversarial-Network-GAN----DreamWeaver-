import React from 'react';
import { categories } from '../data/categories';
import type { Category } from '../types';

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
  selectedCategory: Category | null;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect, selectedCategory }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`p-4 rounded-xl text-left transition-all ${
            selectedCategory === category.id
              ? 'bg-primary/5 border-2 border-primary shadow-elegant'
              : 'bg-white border-2 border-black/5 hover:border-primary/20 hover:shadow-elegant'
          }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h3 className="font-semibold text-primary">{category.label}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};