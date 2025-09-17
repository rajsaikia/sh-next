'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex items-center justify-start space-x-4 p-4 bg-white dark:bg-gray-900 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
}
