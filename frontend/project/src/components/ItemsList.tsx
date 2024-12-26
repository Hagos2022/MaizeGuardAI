import React from 'react';
import { Item } from '../types';
import { ItemCard } from './ItemCard';

interface ItemsListProps {
  items: Item[];
}

export function ItemsList({ items }: ItemsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}