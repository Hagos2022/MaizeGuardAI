import { API_CONFIG } from '../constants/config';
import { getMockPaginatedData } from '../data/mockData';
import { PaginatedResponse, Item } from '../types';

const USE_MOCK_DATA = true; // Toggle this to switch between mock and real API

export async function fetchItems(page: number = 1): Promise<PaginatedResponse<Item>> {
  if (USE_MOCK_DATA) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return getMockPaginatedData(page, API_CONFIG.ITEMS_PER_PAGE);
  }

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/items/?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
}