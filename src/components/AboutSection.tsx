import { TESTIMONIALS } from '../data';
import { Star, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="histoire" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Story Assets/Images */}
          <div className="lg:col-span-12 xl:col-span-5 relative order-last lg:order-first">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Back ambient card */}
              <div className="absolute inset-0 rounded-[2rem] bg-brand-gold/10 rotate-3 scale-102" />
              
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800"
                  alt="Atelier de création textile et design streetwear de la marque"
                  className="h-full w-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Glass Micro panel */}
              <div className="absolute -bottom-6 -right-4 bg-brand-red text-white rounded-2xl p-5 shadow-xl max-w-[210px] border border-brand-red">
                <Award className="h-6 w-6 text-brand-gold mb-2 fill-brand-gold/15" />
                <h4 className="text-xs font-display uppercase font-black tracking-wider text-brand-gold">Label Numéroté</h4>
                <p className="text-[10px] text-brand-cream/90 mt-1 font-sans">Chaque pièce est unique, enregistrée au registre Julio's.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy text */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-wider font-display">
              <Sparkles className="h-3.5 w-3.5 text-brand-red" />
              <span>Notre Charte Éco-Conception</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-dark leading-tight">
              L'impertinence du pop art, l'exigence de la haute couture urbaine.
            </h2>
            
            <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed font-sans font-medium">
              Chez JULIO'S, nous croyons que le vêtement de rue doit être aussi résistant que légendaire. Notre label est né du désir d'allier l'esthétique croustillante et audacieuse de Pringles avec des matières nobles produites de façon éthique et durable.
            </p>

            {/* Structured Value Props */}
            <div className="space-y-4 pt-4 font-sans">
              <div className="flex gap-3.5 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-red/5 text-brand-red flex items-center justify-center shrink-0 mt-0.5 font-display font-black text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-tight">Coton Supima Éco-Responsable</h4>
                  <p className="text-xs text-brand-dark/65 mt-0.5">
                    Tous nos fils proviennent de récoltes de coton certifiées à empreinte hydrique minimale, tricotés en bouclette serrée pour une durabilité décennale.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-red/5 text-brand-red flex items-center justify-center shrink-0 mt-0.5 font-display font-black text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-tight">Broderie 3D Haute Densité</h4>
                  <p className="text-xs text-brand-dark/65 mt-0.5">
                    Nos célèbres moustaches et mascottes Julio sont brodées avec un fil de satin haute brillance résistant à plus de 200 lavages sans s'effilocher.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-red/5 text-brand-red flex items-center justify-center shrink-0 mt-0.5 font-display font-black text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-tight">L'Emballage Tube Culot Réutilisable</h4>
                  <p className="text-xs text-brand-dark/65 mt-0.5">
                    Votre vêtement est expédié plié avec un soin d'orfèvre dans une boîte en métal rigide de 30cm, inspirée des tubes de tuiles iconiques, parfaite à recycler en objet déco.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Testimonials Row */}
        <div className="border-t border-brand-dark/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 font-display">Avis de Connaisseurs</h3>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-dark">
              Ils ont adopté le style croustillant
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-dark/5 flex flex-col justify-between hover:border-brand-gold/40 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Stars indicators */}
                  <div className="flex gap-0.5 text-brand-gold mb-4" aria-label={`Note de ${t.rating} sur 5`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  <p className="font-sans font-medium text-xs sm:text-sm leading-relaxed text-brand-dark/80 italic mb-6">
                    “ {t.quote} ”
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-brand-dark/5 pt-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-brand-cream shrink-0 border border-white shadow-sm">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-display text-xs font-black text-brand-dark leading-tight">{t.name}</h5>
                    <p className="text-[10px] text-brand-dark/50 font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
