import { useState } from 'react';
import { Info } from 'lucide-react';

export default function Footer() {
  const [showMentions, setShowMentions] = useState(false);

  return (
    <footer id="site-footer" className="bg-brand-dark text-brand-cream py-12 border-t border-brand-dark/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-none bg-brand-red text-white">
                <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M8 13.5s1.2-1.5 4-1.5 4 1.5 4 1.5" strokeWidth="1.5" />
                  <circle cx="9.5" cy="9.5" r="1.2" fill="currentColor" />
                  <circle cx="14.5" cy="9.5" r="1.2" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-base font-black tracking-widest text-white uppercase">ORIGINEL SHOP</span>
            </div>
            
            <p className="text-[11.5px] text-brand-cream/70 max-w-sm leading-relaxed font-sans">
              Boutique en ligne haut de gamme de sélections et petits trésors originels. De la mode fluide aux électroniques de pointe, en passant par le maquillage d'éclat et le design vintage.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 font-display">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Navigation</h4>
            <ul className="space-y-2 text-xs text-brand-cream/80">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#produits" className="hover:text-white transition-colors">La Collection</a>
              </li>
              <li>
                <a href="#histoire" className="hover:text-white transition-colors">Notre Engagement</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Formulaire Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Info */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-display">Clubs & Drops Privés</h4>
            <p className="text-xs text-brand-cream/70 leading-relaxed">
              Pour être prévenu du prochain arrivage ultra-limité (vêtements, accessoires exclusifs), suivez-nous sur les réseaux sociaux. Aucun spam, uniquement du style croustillant.
            </p>
            <div className="text-[10px] text-brand-cream/55 flex items-center gap-1">
              <Info className="h-3.5 w-3.5 text-brand-gold shrink-0" />
              <span>Marque de mode impertinente et responsable</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & micro legal mentions links clickable */}
        <div className="mt-12 pt-8 border-t border-white/5 bg-brand-dark text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10.5px] text-brand-cream/60 font-sans">
            © {new Date().getFullYear()} ORIGINEL SHOP. Tous droits réservés. Conçu pour les amateurs d'un design d'exception.
          </p>
          
          <div className="flex gap-4 items-center text-[10.5px] text-brand-cream/60 font-sans">
            <button 
              id="legal-mentions-btn"
              onClick={() => setShowMentions(true)} 
              className="hover:text-white hover:underline cursor-pointer font-bold"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <span className="text-brand-cream/40 select-none">RGPD & CGV Protégées</span>
          </div>
        </div>
      </div>

      {/* Styled legal mentions Modal standard backdrop overlay inside */}
      {showMentions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs font-sans">
          <div className="bg-[#FAFAFA] text-brand-dark max-w-lg w-full p-6 sm:p-8 rounded-none relative shadow-xl space-y-4 max-h-[80vh] overflow-y-auto border border-brand-dark/15">
            <h3 className="font-display text-sm font-black uppercase tracking-widest text-brand-dark">Mentions Légales Simplifiées</h3>
            
            <div className="space-y-3 text-xs leading-relaxed text-brand-dark/80">
              <p>
                <strong>Éditeur du site :</strong> ORIGINEL SHOP SAS, au capital de 25 000€, immatriculée au RCS de Paris sous le numéro 987 654 321. Siège social : 25 Rue du Faubourg Saint-Antoine, 75011 Paris. Directeur de publication : L'Équipe de Direction Créative.
              </p>
              <p>
                <strong>Hébergeur :</strong> Google Cloud Platform (Cloud Run containers), Europe-West region.
              </p>
              <p>
                <strong>Données Personnelles (RGPD) :</strong> Les données saisies dans les formulaires de livraison ou de contact ne servent qu'à la simulation interactive et ne sont stockées sur aucun serveur permanent ou partagées avec des tiers.
              </p>
              <p>
                <strong>Inspiration & Déclaration :</strong> Ce site internet est une simulation e-commerce d'un goût esthétique supérieur. Il s'agit d'une œuvre conceptuelle et d'une démonstration interactive moderne. Aucune transaction bancaire réelle n'a lieu.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-dark/10 flex justify-end">
              <button
                id="close-mentions-btn"
                onClick={() => setShowMentions(false)}
                className="rounded-none bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest px-5 py-3 hover:bg-brand-red transition-all cursor-pointer font-display"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
