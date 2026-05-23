import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function Header({ cartCount, onCartOpen, searchTerm, onSearchChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'La Collection', href: '#produits' },
    { label: 'Le Manifeste', href: '#histoire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header id="site-header" className="sticky top-0 z-40 w-full border-b border-brand-dark/5 bg-brand-cream/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-brand-gold shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12">
              {/* Mustache simple geometric stylized design natively in JSX */}
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,14 C10.2,14 8.5,12.5 6.5,12.5 C4.5,12.5 3,13.5 2,15 C4,17 7.5,17.5 10,16.5 C11,16 11.5,15.5 12,15.5 C12.5,15.5 13,16 14,16.5 C16.5,17.5 20,17 22,15 C21,13.5 19.5,12.5 17.5,12.5 C15.5,12.5 13.8,14 12,14 Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-black tracking-tight text-brand-dark leading-none">
                JULIO'S
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-red font-bold font-display -mt-0.5">
                CRISP WEAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-display">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-brand-dark/80 hover:text-brand-red relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons Bar */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
            {/* Search Toggle */}
            <div className="relative flex items-center">
              {isSearchOpen && (
                <input
                  id="search-input"
                  type="text"
                  placeholder="Rechercher un drop..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-40 sm:w-60 bg-white border border-brand-dark/10 text-sm py-1.5 pl-3 pr-8 rounded-full focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red mr-2 animate-in slide-in-from-right duration-200 font-sans"
                />
              )}
              <button
                id="search-toggle-btn"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) onSearchChange('');
                }}
                className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark transition-colors"
                aria-label="Recherche"
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
            </div>

            {/* Shopping Bag Trigger */}
            <button
              id="cart-trigger-btn"
              onClick={onCartOpen}
              className="p-2 mr-1 sm:mr-0 rounded-full hover:bg-brand-dark/5 text-brand-dark relative transition-transform active:scale-95 duration-100"
              aria-label="Voir le Panier"
            >
              <ShoppingBag className="h-5 w-5 text-brand-dark" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-brand-red text-[10px] font-black text-white flex items-center justify-center ring-2 ring-brand-cream animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Mobile Menu */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark md:hidden"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-brand-dark/5 bg-brand-cream text-brand-dark animate-in fade-in duration-300">
          <div className="space-y-1.5 px-4 pt-3 pb-5 shadow-inner font-display">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-base font-bold text-brand-dark hover:bg-brand-red/10 hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
