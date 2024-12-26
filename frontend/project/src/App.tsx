import React, { useState, useEffect } from 'react';
import { fetchItems } from './services/api';
import { Pagination } from './components/Pagination';
import { ItemsList } from './components/ItemsList';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { Item } from './types';
import { API_CONFIG } from './constants/config';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchItems(currentPage);
        setItems(response.results);
        setTotalPages(Math.ceil(response.count / API_CONFIG.ITEMS_PER_PAGE));
      } catch (err) {
        setError('Failed to load items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Items Catalog
        </h1>

        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <ItemsList items={items} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;