import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Instagram, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onAddToast: (message: string, type: 'success' | 'info') => void;
}

export default function ContactSection({ onAddToast }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (name.trim().length < 2) {
      newErrors.name = "Le nom doit comporter au moins 2 caractères.";
    }
    
    if (!email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }
    
    if (message.trim().length < 10) {
      newErrors.message = "Votre message doit contenir au moins 10 caractères.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      onAddToast("Message envoyé avec succès ! Nos designers vous répondront rapidement.", "success");
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    isSubmitted && setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Coordinates Block Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-2 font-display">Prendre Contact</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-dark">
                Une question sur un drop ou un sizing ?
              </h2>
              <p className="font-sans text-sm text-brand-dark/70 mt-4 leading-relaxed font-semibold">
                Notre cellule conciergerie et stylisme répond à toutes vos demandes de collaboration, d'essayage privé ou de service après-vente.
              </p>
            </div>

            {/* Icons List */}
            <div className="space-y-6 font-sans">
              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 rounded-full bg-white text-brand-red flex items-center justify-center shadow-xs border border-brand-dark/5 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide font-display">Atelier & Showroom Paris</h4>
                  <p className="text-sm text-brand-dark/70">25 Rue du Faubourg Saint-Antoine, 75011 Paris</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 rounded-full bg-white text-brand-red flex items-center justify-center shadow-xs border border-brand-dark/5 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide font-display">Stylisme & Drops</h4>
                  <a href="mailto:concierge@julios-crispwear.com" className="text-sm text-brand-red font-bold hover:underline">
                    concierge@julios-crispwear.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 rounded-full bg-white text-brand-red flex items-center justify-center shadow-xs border border-brand-dark/5 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide font-display">Ligne Directe Conciergerie</h4>
                  <a href="tel:+33145454545" className="text-sm text-brand-dark/70 hover:text-brand-red">
                    +33 (0)1 45 45 45 45
                  </a>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="border-t border-brand-dark/10 pt-6 space-y-3 font-sans">
              <h4 className="text-xs font-bold text-brand-dark uppercase font-display">Rejoindre le club</h4>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 bg-white rounded-full text-brand-dark hover:text-brand-red hover:shadow-xs transition-all border border-brand-dark/5"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4 text-brand-red" />
                  <span>@JuliosCrispWear</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Block Column */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-brand-dark/5 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="mx-auto h-16 w-16 bg-brand-red/5 rounded-full flex items-center justify-center border border-brand-red/10 animate-bounce">
                  <CheckCircle2 className="h-9 w-9 text-brand-red" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-brand-dark">Votre demande est déposée</h3>
                  <p className="text-xs text-brand-red uppercase tracking-widest font-display font-bold">Un styliste prend soin de vous</p>
                </div>
                <p className="text-sm text-brand-dark/70 max-w-sm mx-auto leading-relaxed font-sans">
                  Notre équipe de modélistes et dessinateurs à l'atelier examine votre message avec minutie et reviendra vers vous sous 24 heures pour affiner votre silhouette.
                </p>
                <button
                  id="reset-contact-form-btn"
                  onClick={handleReset}
                  className="rounded-full border border-brand-dark/10 px-6 py-2.5 text-xs font-bold text-brand-dark hover:bg-brand-cream font-display transition-all"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-brand-dark uppercase mb-1.5 font-display tracking-wider">
                      Nom & Prénom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                      }}
                      className={`w-full px-4 py-3 bg-brand-cream/80 border ${
                        errors.name ? 'border-brand-red focus:ring-brand-red' : 'border-brand-dark/10 focus:ring-brand-red'
                      } rounded-xl focus:outline-none focus:ring-1 text-sm font-sans`}
                    />
                    {errors.name && <p className="text-brand-red text-[11px] mt-1 font-sans">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-brand-dark uppercase mb-1.5 font-display tracking-wider">
                      Adresse Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jean.dupont@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                      }}
                      className={`w-full px-4 py-3 bg-brand-cream/80 border ${
                        errors.email ? 'border-brand-red focus:ring-brand-red' : 'border-brand-dark/10 focus:ring-brand-red'
                      } rounded-xl focus:outline-none focus:ring-1 text-sm font-sans`}
                    />
                    {errors.email && <p className="text-brand-red text-[11px] mt-1 font-sans">{errors.email}</p>}
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-brand-dark uppercase mb-1.5 font-display tracking-wider">
                    Votre Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Posez votre question concernant les mensurations de notre Hoodie, les réservations pour les futurs lancements ou une réclamation..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                    }}
                    className={`w-full px-4 py-3 bg-brand-cream/80 border ${
                      errors.message ? 'border-brand-red focus:ring-brand-red' : 'border-brand-dark/10 focus:ring-brand-red'
                    } rounded-xl focus:outline-none focus:ring-1 text-sm font-sans resize-none`}
                  />
                  {errors.message && <p className="text-brand-red text-[11px] mt-1 font-sans">{errors.message}</p>}
                </div>

                <button
                  id="submit-contact-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-8 py-3.5 text-xs font-bold font-display hover:bg-brand-dark shadow-md shadow-brand-red/10 transition-all hover:scale-[1.01] active:translate-y-0 active:scale-[0.99] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmettre au bureau de style</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
