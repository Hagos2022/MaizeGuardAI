import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Detect } from '../pages/Detect';
import { Chat } from '../pages/Chat';
import { DiseaseLibrary } from '../pages/DiseaseLibrary';
import { FAQ } from '../pages/FAQ';
import { Resources } from '../pages/Resources';
import { Feedback } from '../pages/Feedback';
import { Blog } from '../pages/Blog';

export function Router() {
  const path = window.location.pathname;

  switch (path) {
    case '/':
      return <Home />;
    case '/about':
      return <About />;
    case '/detect':
      return <Detect />;
    case '/chat':
      return <Chat />;
    case '/diseases':
      return <DiseaseLibrary />;
    case '/faq':
      return <FAQ />;
    case '/resources':
      return <Resources />;
    case '/feedback':
      return <Feedback />;
    case '/blog':
      return <Blog />;
    default:
      return <Home />;
  }
}