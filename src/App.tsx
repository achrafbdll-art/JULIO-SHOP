import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartSidebar from './components/CartSidebar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast, { ToastMessage } from './components/Toast';
import { PRODUCTS, CATEGORIES } from './data';
import { Product, CartItem } from './types';
import { SlidersHorizontal, ArrowUpDown, RefreshCcw, Sparkles, Shirt, Headphones, Coffee, Smile, ShoppingBag } from 'lucide-react';

export default function App() {
  // Navigation & Utility states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Search & Filtering states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Toasts stack state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast handlers
  const handleAddToast = (message: string, type: 'success' | 'info') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      type
    };
    setToasts(prev => [...prev, newToast]);
  };

  const handleCloseToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.product.id === product.id);
      if (existing) {
        handleAddToast(`Quantité mise à jour : ${product.name} (${existing.quantity + quantity})`, 'success');
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      handleAddToast(`${product.name} ajouté au panier !`, 'success');
      return [...prevItems, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Combined Searching, Filtering and Sorting logic
  const processedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by Category
    if (selectedCategory !== 'Tous') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Filter by Search Query (now checking updated types subLabel field)
    if (searchTerm.trim() !== '') {
      const query = searchTerm.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.subLabel.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // 3. Sort by Price
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Tous');
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-red/10 selection:text-brand-red">
      
      {/* Header */}
      <Header 
        cartCount={cartCount} 
        onCartOpen={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Catalog Section */}
        <section id="produits" className="py-16 md:py-24 bg-white scroll-mt-16 border-t border-b border-brand-dark/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Section Greeting */}
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-1 font-display">SÉLECTION PRINTEMPS 2026</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-wide">
                La Collection d'Objets Originels
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-dark/70 mt-3 leading-relaxed max-w-lg mx-auto">
                Explorez des articles de sélection d'époque, de technologies de pointe, de textiles raffinés et de maroquinerie d'art. Le tout marié dans de subtils tons pastel.
              </p>
            </div>

            {/* Shop controls: Category Filters + Price Sorting (Originel pastel highlight circles) */}
            <div className="flex flex-col gap-6 bg-white py-6 mb-12 border-t border-b border-brand-dark/15">
              <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6">
                
                {/* Scrollable Category Circles - Warm, circular highlight style from image */}
                <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto pb-4 pt-1 xl:pb-0 scrollbar-none justify-start font-display">
                  {CATEGORIES.map((cat) => {
                    let IconComponent = Sparkles;
                    
                    if (cat === "Tous") {
                      IconComponent = Sparkles;
                    } else if (cat === "Vêtements") {
                      IconComponent = Shirt;
                    } else if (cat === "Électroniques") {
                      IconComponent = Headphones;
                    } else if (cat === "Électroménager") {
                      IconComponent = Coffee;
                    } else if (cat === "Maquillage & Beauté") {
                      IconComponent = Smile;
                    } else if (cat === "Chaussures & Accessoires") {
                      IconComponent = ShoppingBag;
                    }

                    const isSelected = selectedCategory === cat;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className="flex flex-col items-center gap-2 shrink-0 focus:outline-none cursor-pointer group"
                      >
                        {/* Circle badge contour */}
                        <div 
                          className={`h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                            isSelected 
                              ? "bg-brand-dark text-white border-brand-dark scale-105 shadow-md" 
                              : "bg-[#FAFAFA] text-brand-dark/70 border-brand-dark/5 group-hover:border-brand-dark/35 group-hover:bg-neutral-50"
                          }`}
                        >
                          <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:rotate-12"}`} />
                        </div>
                        {/* Caption */}
                        <span 
                          className={`font-display text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.15em] font-extrabold transition-all ${
                            isSelected ? "text-brand-dark underline underline-offset-4" : "text-brand-dark/50 group-hover:text-brand-dark/80"
                          }`}
                        >
                          {cat}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Pricing Sorting Trigger Button */}
                <div className="flex items-center gap-2 shrink-0 border-t xl:border-t-0 pt-4 xl:pt-0 border-brand-dark/10">
                  <div className="p-1.5 text-brand-dark/40">
                     <ArrowUpDown className="h-4 w-4" />
                  </div>
                  <select
                    id="price-sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-white border border-brand-dark/20 font-display text-[10px] uppercase tracking-wider font-bold rounded-none px-5 py-3 text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
                    aria-label="Trier les vêtements"
                  >
                    <option value="default">FILTRER & TRIER</option>
                    <option value="price-asc">PRIX : CROISSANT</option>
                    <option value="price-desc">PRIX : DÉCROISSANT</option>
                  </select>
                </div>
              </div>

              {/* Status report of current filter params if anything is set */}
              {(selectedCategory !== 'Tous' || searchTerm.trim() !== '' || sortBy !== 'default') && (
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-dark/10 pt-4 font-sans">
                  <div className="flex flex-wrap gap-2 text-xs text-brand-dark/70 items-center">
                    <span className="font-semibold text-[10px] uppercase tracking-wider">Filtres actifs :</span>
                    {selectedCategory !== 'Tous' && (
                      <span className="bg-brand-dark/5 border border-brand-dark/10 text-brand-dark px-3 py-1 rounded-none font-bold font-display text-[10px] uppercase tracking-[0.1em]">
                        {selectedCategory}
                      </span>
                    )}
                    {searchTerm.trim() !== '' && (
                      <span className="bg-brand-dark/5 border border-brand-dark/10 text-brand-dark px-3 py-1 rounded-none font-bold font-display text-[10px] italic">
                        "{searchTerm}"
                      </span>
                    )}
                    {sortBy !== 'default' && (
                      <span className="bg-brand-dark/5 border border-brand-dark/10 text-brand-dark px-3 py-1 rounded-none font-bold font-display text-[10px] uppercase tracking-[0.1em]">
                        {sortBy === 'price-asc' ? "Prix croissant" : "Prix décroissant"}
                      </span>
                    )}
                  </div>

                  <button
                    id="reset-filters-btn"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-red hover:opacity-85 transition-opacity cursor-pointer font-display"
                  >
                    <RefreshCcw className="h-3.5 w-3.5" />
                    RÉINITIALISER
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid Section */}
            {processedProducts.length === 0 ? (
              <div className="bg-brand-cream rounded-none p-12 text-center max-w-md mx-auto border border-brand-dark/10 shadow-inner flex flex-col items-center justify-center space-y-5 animate-in fade-in duration-300">
                <div className="h-12 w-12 bg-white text-brand-red rounded-none border border-brand-dark/10 flex items-center justify-center shadow-xs">
                  <RefreshCcw className="h-5 w-5 animate-spin" />
                </div>
                <h3 className="font-display text-base font-black uppercase tracking-wider text-brand-dark">Aucune pièce trouvée</h3>
                <p className="text-xs text-brand-dark/65 font-sans leading-relaxed">
                  Notre garde-robe ne correspond pas aux filtres de recherche actifs. Modifiez vos critères ou réinitialisez le catalogue d'un clic.
                </p>
                <button
                  id="empty-state-reset-btn"
                  onClick={handleResetFilters}
                  className="rounded-none bg-brand-dark text-white text-[10px] tracking-widest uppercase font-bold px-6 py-3 hover:bg-brand-red transition-all cursor-pointer font-display"
                >
                  Voir toute la collection
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {processedProducts.map((p) => (
                  <ProductCard 
                    key={p.id}
                    product={p}
                    onAddToCart={(prod) => handleAddToCart(prod, 1)}
                    onSelectProduct={setSelectedProduct}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Storytelling & Testimonials Section */}
        <AboutSection />

        {/* Contact Form & Studio details Section */}
        <ContactSection onAddToast={handleAddToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onAddToast={handleAddToast}
      />

      {/* Detailed Look Product Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floated Toasts Portal Layer */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast 
              toast={toast}
              onClose={handleCloseToast}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
