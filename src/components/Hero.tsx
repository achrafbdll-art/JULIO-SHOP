import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-brand-cream pt-8 pb-16 lg:py-24">
      {/* Abstract elegant background highlights */}
      <div className="absolute top-0 right-0 -mr-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 h-96 w-96 rounded-full bg-brand-red/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/10 bg-brand-red/5 px-3 py-1.5 text-xs font-bold text-brand-red mb-6 w-fit animate-pulse font-display">
              <Sparkles className="h-3 w-3 text-brand-gold fill-brand-gold" />
              <span>DROP CAPSULE PRINTEMPS 2026 : RETRO CRUNCH</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark leading-[1.05] mb-6">
              Le style a du <span className="italic text-brand-red font-normal">goût</span>. Portez le croustillant.
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-brand-dark/70 max-w-xl mb-8 leading-relaxed">
              JULIO'S réinvente la mode urbaine avec une collection streetwear premium et impertinente. Des coupes lourdes inspirées par les courbes et l'histoire de la plus célèbre des tuiles à empiler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#produits"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-red/30 active:translate-y-0 font-display"
              >
                Découvrir le Drop
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#histoire"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/10 bg-white px-8 py-4 text-sm font-bold text-brand-dark hover:bg-brand-cream hover:border-brand-gold transition-all hover:-translate-y-0.5 active:translate-y-0 font-display"
              >
                Notre Manifeste Éco-Conçu
              </a>
            </div>

            {/* Micro Conversion Trust Pillars */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-dark/5 pt-8">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-brand-red/5 text-brand-red shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark font-display">Coton Organique</h4>
                  <p className="text-[10px] text-brand-dark/60 font-sans">Haute tenue certifiée GOTS</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-brand-red/5 text-brand-red shrink-0">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark font-display">Envoi sous 24/48h</h4>
                  <p className="text-[10px] text-brand-dark/60 font-sans">Boîtes géantes collector</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-brand-red/5 text-brand-red shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark font-display">Série Premium</h4>
                  <p className="text-[10px] text-brand-dark/60 font-sans">Limité à 150 pièces/modèle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Presentation Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back ambient frame */}
              <div className="absolute inset-0 rounded-[2rem] bg-brand-gold/10 -rotate-2 scale-102" />
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-dark/10 border border-white/40 aspect-[4/5] object-cover">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200"
                  alt="Mannequin portant un hoodie rouge streetwear haut de gamme dans un univers épuré"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image dark overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Float Glassmorphic Badge / Interactive Banner */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/80 rounded-2xl p-4 border border-white/50 flex items-center justify-between shadow-xl animate-in fade-in slide-in-from-bottom duration-500 delay-200">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-xl bg-brand-cream shrink-0 border border-brand-red/5">
                    <img
                      src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=102"
                      alt="Cylinder Bag representation mini"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-display font-black uppercase tracking-wider text-brand-red">ÉDITION RARE LIMITÉE</h5>
                    <p className="text-sm font-display font-bold text-brand-dark">The Cylinder Bag 'Original Can'</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-brand-dark/60 font-semibold block uppercase font-display">Drop Price</span>
                  <span className="text-sm sm:text-base font-display font-black text-brand-red">89,00€</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
