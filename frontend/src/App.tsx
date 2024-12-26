import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Router } from './components/Router';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
    </div>
  );
}