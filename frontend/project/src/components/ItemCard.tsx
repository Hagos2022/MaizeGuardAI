import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}