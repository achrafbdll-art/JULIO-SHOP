import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ShoppingCart, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onSelectProduct }: ProductCardProps) {
  return (
    <motion.article 
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-none border border-brand-dark/10 bg-white transition-all duration-300 hover:shadow-2xl"
    >
      {/* Product Image & Tags Container with custom pastel color card backgrounds */}
      <div 
        className="relative aspect-[4/5] overflow-hidden cursor-pointer transition-colors duration-300 flex items-center justify-center p-6 sm:p-8" 
        style={{ backgroundColor: product.bgColor || '#FAFAFA' }}
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover overlay utility */}
        <div className="absolute inset-0 bg-brand-dark/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <button 
            id={`view-details-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-none bg-white text-brand-dark hover:bg-brand-red hover:text-white transition-colors duration-200 shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform cursor-pointer"
            aria-label={`Inspecter ${product.name}`}
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Badges: Guess-style clean rectangles */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isRare && (
            <span className="inline-flex items-center gap-1 rounded-none bg-brand-red text-white px-2.5 py-1 text-[8.5px] font-bold tracking-[0.15em] uppercase shadow-sm font-display">
              <Sparkles className="h-3 w-3 text-brand-gold fill-brand-gold" />
              SÉRIE LIMITÉE
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex items-center rounded-none bg-brand-dark text-white px-2.5 py-1 text-[8.5px] font-black tracking-[0.15em] uppercase shadow-sm font-display border border-white/20">
              FRESH DROP
            </span>
          )}
        </div>

        {/* Stock Warning Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-xs">
            <span className="bg-brand-dark text-white font-display text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-none">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Product Metadata & Action */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2">
          <span className="text-[10px] sm:text-[10.5px] font-bold text-brand-red uppercase tracking-[0.2em] block font-display">
            {product.category}
          </span>
          <h3 
            className="font-display text-base font-black uppercase text-brand-dark hover:text-brand-red cursor-pointer line-clamp-1 transition-colors leading-tight tracking-wide"
            onClick={() => onSelectProduct(product)}
          >
            {product.name}
          </h3>
          <p className="font-sans italic text-[11px] sm:text-[11.5px] text-brand-dark/50 truncate">
            {product.subLabel}
          </p>
        </div>

        <p className="font-sans text-xs text-brand-dark/70 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Bottom Panel */}
        <div className="mt-auto pt-4 border-t border-brand-dark/10 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-brand-dark/40 uppercase tracking-widest font-display">Tarif Club</span>
            <span className="font-display text-base font-black text-brand-dark leading-none">
              {product.price.toFixed(2)}€
            </span>
          </div>

          <button
            id={`add-to-cart-${product.id}`}
            disabled={!product.inStock}
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center justify-center gap-1.5 rounded-none bg-brand-dark hover:bg-brand-red text-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] font-display transition-all shrink-0 active:scale-95 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed group/btn duration-200 cursor-pointer"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingCart className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-rotate-12" />
            <span>AJOUTER</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
