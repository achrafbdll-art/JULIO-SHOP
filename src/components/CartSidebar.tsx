import { useState, FormEvent } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, ArrowRight, CheckCircle, CreditCard, Ship } from 'lucide-react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onAddToast: (msg: string, type: 'success' | 'info') => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddToast
}: CartSidebarProps) {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [formError, setFormError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const delivery = subtotal > 100 || subtotal === 0 ? 0 : 8.50;
  const total = subtotal + delivery;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !address) {
      setFormError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if (!email.includes('@')) {
      setFormError('Veuillez saisir une adresse email valide.');
      return;
    }

    setFormError('');
    setCheckoutStep('success');
    onAddToast("Félicitations ! Votre commande a été enregistrée.", "success");
  };

  const handleFinishSuccess = () => {
    onClearCart();
    setCheckoutStep('cart');
    setName('');
    setEmail('');
    setAddress('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-dark/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div onClick={onClose} className="absolute inset-0 cursor-pointer" aria-hidden="true" />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-brand-cream shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-350 border-l border-brand-dark/5">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-brand-dark/5 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-black text-brand-dark">
              {checkoutStep === 'cart' && "Votre Sélection"}
              {checkoutStep === 'checkout' && "Informations de Transit"}
              {checkoutStep === 'success' && "Commande Validée !"}
            </h2>
            <p className="text-xs text-brand-red font-bold font-display uppercase tracking-wider mt-0.5">
              {checkoutStep === 'cart' && `${cartItems.length} article(s) à empiler`}
              {checkoutStep === 'checkout' && "Frais de colisage métallique offerts"}
              {checkoutStep === 'success' && "Prêt pour le transit sécurisé"}
            </p>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark/70 hover:text-brand-red transition-colors cursor-pointer"
            aria-label="Fermer le panier"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Drawer Body Content */}
        {checkoutStep === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="h-16 w-16 bg-brand-red/5 text-brand-red rounded-full flex items-center justify-center mb-4">
                    <Trash2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-black text-brand-dark mb-1">Votre panier est vide</h3>
                  <p className="text-xs text-brand-dark/60 max-w-xs font-sans">
                    Parcourez notre collection et laissez-vous tenter par une pièce d'exception pour un style savoureusement croustillant.
                  </p>
                  <button
                    id="back-to-shop-btn"
                    onClick={onClose}
                    className="mt-6 rounded-full bg-brand-red text-white px-6 py-2.5 text-xs font-bold font-display hover:bg-brand-dark transition-all cursor-pointer"
                  >
                    Retour aux vêtements
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-start pb-4 border-b border-brand-dark/5 last:border-0 font-sans">
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-brand-cream shrink-0 shadow-inner border border-brand-dark/5">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-bold text-brand-dark truncate leading-tight">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-brand-dark/50 italic truncate">
                        {item.product.subLabel}
                      </p>
                      
                      {/* Price calculation */}
                      <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 border border-brand-dark/10 rounded-full py-0.5 px-2 bg-white text-xs">
                          <button
                            id={`qty-dec-${item.product.id}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center text-brand-red hover:text-brand-dark font-bold cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-semibold text-brand-dark">{item.quantity}</span>
                          <button
                            id={`qty-inc-${item.product.id}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center text-brand-red hover:text-brand-dark font-bold cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="font-display text-xs font-bold text-brand-red">
                          {(item.product.price * item.quantity).toFixed(2)}€
                        </div>
                      </div>
                    </div>

                    <button
                      id={`remove-item-${item.product.id}`}
                      onClick={() => {
                        onRemoveItem(item.product.id);
                        onAddToast(`${item.product.name} retiré de votre liste`, 'info');
                      }}
                      className="p-1 text-gray-300 hover:text-brand-red transition-colors shrink-0 self-center cursor-pointer"
                      aria-label="Supprimer l'article"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Calculation details */}
            {cartItems.length > 0 && (
              <div className="bg-white p-6 md:p-8 space-y-4 border-t border-brand-dark/5 shrink-0">
                <div className="space-y-1.5 text-xs text-brand-dark/80 font-sans">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span className="font-medium">{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="inline-flex items-center gap-1">
                      Livraison Premium
                      {delivery === 0 && <span className="bg-brand-red/10 text-brand-red text-[9px] font-bold px-1.5 py-0.2 rounded-full">Offerte</span>}
                    </span>
                    <span className="font-medium">{delivery === 0 ? "0.00€" : `${delivery.toFixed(2)}€`}</span>
                  </div>
                  {delivery > 0 && (
                    <div className="text-[10px] text-brand-dark/50">
                      Ajoutez <span className="font-bold text-brand-red">{(100 - subtotal).toFixed(2)}€</span> de vêtements pour obtenir la livraison offerte.
                    </div>
                  )}
                </div>

                <div className="border-t border-brand-dark/5 pt-4 flex justify-between text-brand-dark">
                  <span className="font-display text-base font-black">Total Général</span>
                  <span className="font-display text-lg font-black text-brand-red">{total.toFixed(2)}€</span>
                </div>

                <button
                  id="checkout-step-trigger-btn"
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-red py-4 text-xs font-bold text-white shadow-lg shadow-brand-red/10 hover:bg-brand-dark transition-all hover:scale-101 active:scale-99 font-display cursor-pointer"
                >
                  Valider ma commande
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-dark/40 font-sans">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-red" />
                  <span>Paiement crypté SSL & Boîte carton tube hermétique</span>
                </div>
              </div>
            )}
          </>
        )}

        {/* Checkout Flow Input */}
        {checkoutStep === 'checkout' && (
          <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col justify-between overflow-y-auto">
            <div className="p-6 md:p-8 space-y-5 flex-1">
              {formError && (
                <div className="p-3 text-xs bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-2">
                  <span className="font-bold">Erreur :</span> {formError}
                </div>
              )}

              <div className="space-y-4 font-sans">
                <div>
                  <label htmlFor="checkout-name" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1 font-display">
                    Nom Complet *
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    placeholder="Éléonore Demars"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-brand-dark/10 rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-email" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1 font-display">
                    Adresse Email *
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    placeholder="eleonore@fashion.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-brand-dark/10 rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-address" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1 font-display">
                    Adresse de Livraison *
                  </label>
                  <textarea
                    id="checkout-address"
                    required
                    rows={3}
                    placeholder="25 Rue du Faubourg Saint-Antoine, 75011 Paris"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-brand-dark/10 rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red text-sm resize-none"
                  />
                </div>
              </div>

              {/* Secure Payment details placeholder mock info */}
              <div className="bg-brand-cream p-4 rounded-xl border border-brand-dark/5 space-y-3 font-sans">
                <div className="flex items-center gap-2 text-brand-dark text-xs font-bold font-display">
                  <CreditCard className="h-4 w-4 text-brand-red" />
                  <span>Simulation Paiement Sécurisé Stripe</span>
                </div>
                <p className="text-[10.5px] text-brand-dark/60">
                  Cette boutique est une simulation artistique haut de gamme. Aucune transaction bancaire réelle ne sera facturée.
                </p>
                <div className="text-[10px] font-display font-bold text-red-800 bg-brand-red/5 py-1.5 px-2.5 rounded-lg border border-brand-red/10 flex items-center gap-1.5">
                  <Ship className="h-3.5 w-3.5" />
                  <span>Transporteur : DHL Express Capsule Climatisé</span>
                </div>
              </div>
            </div>

            {/* Bottom Checkout Actions */}
            <div className="bg-white p-6 md:p-8 space-y-3 border-t border-brand-dark/5 shrink-0">
              <div className="flex justify-between text-brand-dark font-display text-sm font-bold mb-2">
                <span>Montant Global</span>
                <span className="text-brand-red font-black">{total.toFixed(2)}€</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-display">
                <button
                  type="button"
                  id="checkout-back-btn"
                  onClick={() => setCheckoutStep('cart')}
                  className="rounded-full border border-brand-dark/10 bg-white py-3.5 text-xs font-bold text-brand-dark hover:bg-brand-cream transition-all text-center cursor-pointer"
                >
                  Retour
                </button>
                <button
                  id="submit-payment-btn"
                  type="submit"
                  className="rounded-full bg-brand-red py-3.5 text-xs font-bold text-white hover:bg-brand-dark shadow-md shadow-brand-red/10 transition-all text-center cursor-pointer"
                >
                  Valider & Payer
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Checkout Completion Step */}
        {checkoutStep === 'success' && (
          <div className="flex-1 flex flex-col justify-between p-6 md:p-8 text-center bg-brand-cream overflow-y-auto">
            <div className="my-auto space-y-6">
              <div className="mx-auto h-20 w-20 bg-brand-red/5 rounded-full flex items-center justify-center border border-brand-red/10 animate-bounce">
                <CheckCircle className="h-10 w-10 text-brand-red" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-black text-brand-dark">Style validé avec succès !</h3>
                <p className="text-xs text-brand-red font-bold uppercase tracking-widest font-display">Commande Enregistrée</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-brand-dark/5 space-y-3.5 text-left text-xs text-brand-dark/80 max-w-sm mx-auto font-sans">
                <p className="font-bold text-brand-dark border-b border-brand-dark/5 pb-1.5 font-display">Rappel Récapitulatif :</p>
                <div>
                  <span className="block text-[9px] text-brand-dark/40 uppercase font-bold font-display">Destinataire</span>
                  <span className="font-medium">{name}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-brand-dark/40 uppercase font-bold font-display">Adresse de Livraison</span>
                  <span>{address}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-brand-dark/40 uppercase font-bold font-display">Email Suivi</span>
                  <span className="font-medium italic text-indigo-900">{email}</span>
                </div>
              </div>

              <p className="text-xs text-brand-dark/60 max-w-xs mx-auto leading-relaxed font-sans">
                Un email de confirmation contenant votre numéro de suivi de colis spécialisé avec boîte métallique collector vient d'être simulé à l'adresse fournie. 
              </p>
            </div>

            <button
              id="finish-checkout-btn"
              onClick={handleFinishSuccess}
              className="w-full rounded-full bg-brand-red py-4 text-xs font-bold text-white hover:bg-brand-dark transition-all shadow-md mt-6 shrink-0 font-display cursor-pointer"
            >
              Fermer et retourner au shop
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
