import React from 'react';
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
    <article 
      id={`product-card-${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-dark/5 bg-white transition-all duration-300 hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-dark/5"
    >
      {/* Product Image & Tags Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark hover:bg-brand-red hover:text-white transition-colors duration-200 shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform cursor-pointer"
            aria-label={`Inspecter ${product.name}`}
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isRare && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-red text-white px-2.5 py-1 text-[9.5px] font-bold tracking-wider uppercase shadow-sm font-display">
              <Sparkles className="h-3 w-3 text-brand-gold fill-brand-gold" />
              Édition Limitée
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex items-center rounded-full bg-brand-gold text-brand-dark px-2.5 py-1 text-[9.5px] font-black tracking-wider uppercase shadow-sm font-display">
              Fresh Drop
            </span>
          )}
        </div>

        {/* Stock Warning Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center backdrop-blur-xs">
            <span className="bg-brand-dark text-white font-display text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Product Metadata & Action */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2">
          <span className="text-[10px] sm:text-[11px] font-bold text-brand-red uppercase tracking-wider block font-display">
            {product.category}
          </span>
          <h3 
            className="font-display text-base sm:text-lg font-black text-brand-dark hover:text-brand-red cursor-pointer line-clamp-1 transition-colors leading-tight"
            onClick={() => onSelectProduct(product)}
          >
            {product.name}
          </h3>
          <p className="font-sans italic text-[11px] sm:text-[12px] text-brand-dark/50 truncate">
            {product.subLabel}
          </p>
        </div>

        <p className="font-sans text-xs sm:text-sm text-brand-dark/70 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Bottom Panel */}
        <div className="mt-auto pt-4 border-t border-brand-dark/5 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-brand-dark/40 uppercase font-display">Prix Club</span>
            <span className="font-display text-lg sm:text-xl font-bold text-brand-red leading-none">
              {product.price.toFixed(2)}€
            </span>
          </div>

          <button
            id={`add-to-cart-${product.id}`}
            disabled={!product.inStock}
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-cream hover:bg-brand-red text-brand-dark hover:text-white px-3 sm:px-4 py-2 text-xs font-bold font-display transition-all shrink-0 active:scale-95 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed group/btn duration-200 cursor-pointer"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingCart className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-rotate-12" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </article>
  );
}
