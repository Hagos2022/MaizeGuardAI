import React from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { Link } from './Link';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Disease Detection', path: '/detect' },
  { name: 'AI Chat', path: '/chat' },
  { name: 'Disease Library', path: '/diseases' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: '/blog' },
  { name: 'Feedback', path: '/feedback' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-green-700 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <Sprout size={24} />
            <span>MaizeGuard AI</span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 flex-wrap justify-end">
            {navigationLinks.map((link) => (
              <Link key={link.path} href={link.path} className="hover:text-green-200">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-green-700/90 p-4 md:hidden z-40">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link key={link.path} href={link.path} className="hover:text-green-20">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}