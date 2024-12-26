import { PaginatedResponse, Item } from '../types';

const mockItems: Item[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  description: `This is a detailed description for item ${index + 1}. It demonstrates how the content will look with real data.`
}));

export function getMockPaginatedData(page: number, itemsPerPage: number): PaginatedResponse<Item> {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalItems = mockItems.length;

  return {
    count: totalItems,
    next: endIndex < totalItems ? `?page=${page + 1}` : null,
    previous: page > 1 ? `?page=${page - 1}` : null,
    results: mockItems.slice(startIndex, endIndex)
  };
}