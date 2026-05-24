import { useState } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Sparkles, Shirt, Scissors, HelpCircle, Ruler } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const availableSizesList = product.sizes.split(',').map(s => s.trim());

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        onClick={onClose} 
        className="absolute inset-0 cursor-pointer"
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#FAFAFA] max-w-4xl w-full rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-in slide-in-from-bottom-6 duration-300 border border-brand-dark/15">
        
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-none bg-white text-brand-dark hover:bg-brand-red hover:text-white shadow-sm transition-colors border border-brand-dark/10 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left Side: Photo Frame Slider with custom pastel backdrops */}
        <div className="md:w-1/2 p-4 sm:p-6 bg-[#FAFAFA] flex flex-col justify-between border-r border-brand-dark/10">
          <div 
            className="relative aspect-square w-full overflow-hidden rounded-none shadow-inner flex items-center justify-center border border-brand-dark/10 p-8"
            style={{ backgroundColor: product.bgColor || '#FFFFFF' }}
          >
            <img
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            {product.isRare && (
              <span className="absolute top-3 left-3 bg-brand-red text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none shadow-md flex items-center gap-1 font-display">
                <Sparkles className="h-3 w-3 text-brand-gold fill-brand-gold" /> COLLECTORS DROP
              </span>
            )}
          </div>

          {/* Thumbnail row if multiple images exist */}
          {product.images.length > 1 ? (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 scrollbar-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative h-14 w-14 rounded-none overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    idx === activeImageIdx ? 'border-brand-dark shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          ) : (
            <div className="h-14"></div>
          )}
        </div>

        {/* Right Side: Product Details & Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-none bg-white">
          <div className="mb-4">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-1 font-display">
              {product.category}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-dark leading-tight uppercase tracking-wide">
              {product.name}
            </h2>
            <p className="font-sans italic text-sm text-brand-dark/50">
              {product.subLabel}
            </p>
          </div>

          <div className="font-display text-2xl font-black text-brand-dark mb-6">
            {product.price.toFixed(2)}€
          </div>

          <div className="space-y-4 mb-6 text-sm text-brand-dark/80 leading-relaxed font-sans">
            <p>{product.fullDescription}</p>
          </div>

          {/* Specs sheet */}
          <div className="grid grid-cols-2 gap-3.5 bg-[#FAFAFA] p-4 rounded-none mb-6 text-xs text-brand-dark/90 border border-brand-dark/10">
            <div className="flex items-center gap-2.5">
              <Shirt className="h-4 w-4 text-brand-dark shrink-0" />
              <div>
                <span className="font-bold block text-[9px] text-brand-dark/40 uppercase font-display tracking-widest">Matière</span>
                <span className="line-clamp-1">{product.material}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Scissors className="h-4 w-4 text-brand-dark shrink-0" />
              <div>
                <span className="font-bold block text-[9px] text-brand-dark/40 uppercase font-display tracking-widest">Coupe</span>
                <span className="line-clamp-1">{product.fit}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Ruler className="h-4 w-4 text-brand-dark shrink-0" />
              <div>
                <span className="font-bold block text-[9px] text-brand-dark/40 uppercase font-display tracking-widest">Tailles</span>
                <span className="line-clamp-1">{product.sizes}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <HelpCircle className="h-4 w-4 text-brand-dark shrink-0" />
              <div>
                <span className="font-bold block text-[9px] text-brand-dark/40 uppercase font-display tracking-widest">Entretien</span>
                <span className="line-clamp-1">{product.care}</span>
              </div>
            </div>
          </div>

          {/* Size interactive Selection for Conversion Booster */}
          {availableSizesList.length > 0 && availableSizesList[0] !== "Taille Unique" && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-brand-dark/60 uppercase font-display tracking-widest">Sélectionner une taille :</span>
                {selectedSize ? (
                  <span className="text-[10px] font-bold text-brand-red font-display">Taille sélectionnée : {selectedSize}</span>
                ) : (
                  <span className="text-[9px] text-brand-dark/45 font-sans">Veuillez choisir</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {availableSizesList.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`h-10 min-w-10 px-3 text-xs font-bold rounded-none border transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                        : 'bg-white text-brand-dark border-brand-dark/15 hover:border-brand-dark'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cart Interaction Row */}
          <div className="mt-auto pt-6 border-t border-brand-dark/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Quantity control */}
            <div className="flex items-center justify-between border border-brand-dark/15 rounded-none h-12 px-4 bg-white select-none shrink-0">
              <button 
                onClick={decrementQty}
                className="w-8 h-8 flex items-center justify-center font-bold text-lg text-brand-dark hover:text-brand-red cursor-pointer"
                disabled={!product.inStock}
              >
                -
              </button>
              <span className="w-10 text-center font-display font-semibold text-brand-dark text-xs">
                {quantity}
              </span>
              <button 
                onClick={incrementQty}
                className="w-8 h-8 flex items-center justify-center font-bold text-lg text-brand-dark hover:text-brand-red cursor-pointer"
                disabled={!product.inStock}
              >
                +
              </button>
            </div>

            {/* Action button */}
            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-none bg-brand-dark text-white px-6 h-12 text-[10px] font-bold font-display uppercase tracking-widest hover:bg-brand-red disabled:bg-gray-150 disabled:text-gray-400 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>{product.inStock ? "AJOUTER AU PANIER" : "SOLD OUT"}</span>
            </button>
          </div>

          {/* Stock Indicator */}
          <p className="text-[10px] mt-2.5 text-center text-brand-dark/50 font-sans">
            📦 Expedition immédiate sous 24h. Livré dans une boîte capsule métallique iconique réutilisable.
          </p>

        </div>
      </div>
    </div>
  );
}
