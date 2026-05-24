import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

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
    <div className="sticky top-0 z-40 w-full flex flex-col">
      
      {/* Top Banner: International Streetwear Presence Marquee */}
      <div className="w-full bg-brand-dark text-white overflow-hidden py-2 border-b border-brand-gold/20 relative z-50 select-none">
        <div className="flex whitespace-nowrap">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ ease: "linear", duration: 32, repeat: Infinity }}
            className="flex gap-16 text-[10px] sm:text-[11px] font-display font-black tracking-[0.25em] uppercase text-brand-cream/90 shrink-0"
          >
            <span>✦ PARIS, FR</span>
            <span className="text-brand-gold">✦ MARRAKECH, MA</span>
            <span>✦ TOKYO, JP</span>
            <span className="text-brand-red">✦ MILANO, IT</span>
            <span>✦ NEW YORK, US</span>
            <span className="text-brand-gold">✦ CASABLANCA, MA</span>
            <span>✦ LONDON, UK</span>
            <span className="text-brand-clay">✦ SEUL, KR</span>
            
            {/* Duplicate list for continuous wrapping effect */}
            <span>✦ PARIS, FR</span>
            <span className="text-brand-gold">✦ MARRAKECH, MA</span>
            <span>✦ TOKYO, JP</span>
            <span className="text-brand-red">✦ MILANO, IT</span>
            <span>✦ NEW YORK, US</span>
            <span className="text-brand-gold">✦ CASABLANCA, MA</span>
            <span>✦ LONDON, UK</span>
            <span className="text-brand-clay">✦ SEUL, KR</span>
          </motion.div>
        </div>
      </div>

      <header id="site-header" className="relative w-full border-b border-brand-dark/5 bg-brand-cream/95 backdrop-blur-md transition-all overflow-hidden">
        
        {/* Subtle Moroccan Zellij Tilework Motif in Background */}
        <div className="absolute inset-0 opacity-[0.06] text-brand-dark pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="header-zellij-patt" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* 8-point geometric star pattern (Zellij) */}
                <path d="M 50,20 L 59,38 L 78,38 L 63,50 L 71,69 L 50,58 L 29,69 L 37,50 L 22,38 L 41,38 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <polygon points="50,5 65,20 80,20 80,35 95,50 80,65 80,80 65,80 50,95 35,80 20,80 20,65 5,50 20,35 20,20 35,20" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Linking tiles */}
                <path d="M 0,50 L 20,35 M 100,50 L 80,35 M 0,50 L 20,65 M 100,50 L 80,65" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 50,0 L 35,20 M 50,100 L 35,80 M 50,0 L 65,20 M 50,100 L 65,80" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-zellij-patt)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
            
            {/* Logo: Custom circular design mirroring the reference image's gorgeous icon */}
            <a href="#accueil" className="flex items-center gap-3 group shrink-0 relative py-2">
              <div className="relative h-11 w-11 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {/* SVG representing the circle outline containing a dress, an electric plug, and lipstick */}
                <svg className="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle contour */}
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#111827" strokeWidth="3" />
                  
                  {/* Left item: stylized dress (salmon-red) */}
                  <path d="M 32,58 L 26,72 C 26,72 35,76 40,71 L 37,58 Z" fill="#D21F26" />
                  <path d="M 30,35 C 33,35 34,39 34,42 L 32,58 L 26,58 L 26,42 C 26,39 27,35 30,35 Z" fill="#D21F26" />
                  
                  {/* Central item: stylized electric plug (navy/slate) */}
                  <rect x="47" y="32" width="6" height="12" rx="1.5" fill="#111827" />
                  <path d="M 45,44 Q 45,55 50,55 Q 55,55 55,44 Z" fill="#111827" />
                  <line x1="50" y1="55" x2="50" y2="72" stroke="#111827" strokeWidth="2" />
                  <line x1="48" y1="28" x2="48" y2="32" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="28" x2="52" y2="32" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

                  {/* Right item: lipstick (peach/gold) */}
                  <rect x="68" y="48" width="8" height="20" rx="1" fill="#111827" stroke="#111827" strokeWidth="1" />
                  <path d="M 69,38 L 75,34 L 75,48 L 69,48 Z" fill="#EAD2C9" stroke="#111827" strokeWidth="1" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-black tracking-[0.12em] text-brand-dark leading-none">
                  ORIGINEL SHOP
                </span>
                <span className="text-[7.5px] uppercase tracking-[0.25em] text-brand-red font-extrabold font-display mt-1">
                  tout ce qui est original
                </span>
              </div>
            </a>

            {/* Desktop Navigation: Guess-style tracking uppercase */}
            <nav className="hidden md:flex items-center gap-10 font-display">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/80 hover:text-brand-red relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Icons Bar: Sharp borders, ultra-clean */}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto sm:ml-0">
              {/* Search Toggle */}
              <div className="relative flex items-center">
                {isSearchOpen && (
                  <input
                    id="search-input"
                    type="text"
                    placeholder="COMPULSER LA SÉLECTION..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-40 sm:w-64 bg-white border border-brand-dark/20 text-[10px] tracking-wider uppercase py-2 pl-4 pr-10 rounded-none focus:outline-none focus:border-brand-dark mr-2 animate-in fade-in duration-300 font-sans"
                  />
                )}
                <button
                  id="search-toggle-btn"
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    if (isSearchOpen) onSearchChange('');
                  }}
                  className="p-2.5 hover:bg-brand-dark/5 text-brand-dark transition-colors"
                  aria-label="Recherche"
                >
                  {isSearchOpen ? <X className="h-4.5 w-4.5" /> : <Search className="h-4.5 w-4.5" />}
                </button>
              </div>

              {/* Shopping Bag Trigger */}
              <button
                id="cart-trigger-btn"
                onClick={onCartOpen}
                className="p-2.5 hover:bg-brand-dark/5 text-brand-dark relative transition-transform active:scale-95 duration-100"
                aria-label="Voir le Panier"
              >
                <ShoppingBag className="h-4.5 w-4.5 text-brand-dark" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 rounded-none bg-brand-dark text-[8.5px] font-black text-white flex items-center justify-center border border-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger Mobile Menu */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 hover:bg-brand-dark/5 text-brand-dark md:hidden"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-brand-dark/5 bg-brand-cream text-brand-dark animate-in fade-in duration-300 relative z-20">
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
    </div>
  );
}
