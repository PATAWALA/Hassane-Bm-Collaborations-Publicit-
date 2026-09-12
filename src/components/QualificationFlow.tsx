'use client';

import React, { useState } from 'react';
import { CreatorProfile } from '@/types';
import { Megaphone, Handshake, Send, Sparkles, ChevronDown } from 'lucide-react';

const BUDGETS = [
  "Moins de 15.000 FCFA",
  "15.000 - 50.000 FCFA",
  "50.000 - 150.000 FCFA",
  "150.000 - 300.000 FCFA",
  "Plus de 300.000 FCFA"
];

export const QualificationFlow = ({ creator }: { creator: CreatorProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'Publicité' | 'Partenariat'>('Publicité');
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [nom, setNom] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [contexte, setContexte] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Bonjour ${creator.name},%0A%0A` +
      `*Demande:* ${type}%0A` +
      `*Nom/Marque:* ${nom} (${entreprise})%0A`;

    if (type === 'Publicité') {
      text += `*Budget estimé:* ${budget}%0A`;
    }

    if (contexte.trim() !== '') {
      text += `*Contexte/Projet:* ${contexte}%0A`;
    }

    text += `%0AJe souhaite échanger directement avec vous.`;

    window.open(`https://wa.me/${creator.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full space-y-4">
      {/* BOUTON PRINCIPAL */}
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#FFE135] hover:bg-[#ebd028] text-[#0A1128] font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-base sm:text-lg transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 fill-[#0A1128]" />
          Lancer une promotion / Partenariat
          <ChevronDown className="w-5 h-5" />
        </button>
      ) : (
        /* FORMULAIRE DÉPLOYÉ ET INTUITIF */
        <form onSubmit={handleWhatsApp} className="bg-[#101D42] p-5 rounded-2xl border border-slate-700 space-y-4 text-left animate-in fade-in duration-300">
          
          {/* 1. SELECTION DU TYPE */}
          <div>
            <label className="text-xs font-bold text-[#FFE135] uppercase tracking-wider block mb-2">
              1. Type de demande :
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setType('Publicité')}
                className={`py-3 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  type === 'Publicité'
                    ? 'bg-[#FFE135] text-[#0A1128]'
                    : 'bg-[#0A1128] text-slate-300 border border-slate-700'
                }`}
              >
                <Megaphone className="w-4 h-4" />
                Publicité
              </button>

              <button
                type="button"
                onClick={() => setType('Partenariat')}
                className={`py-3 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  type === 'Partenariat'
                    ? 'bg-[#FFE135] text-[#0A1128]'
                    : 'bg-[#0A1128] text-slate-300 border border-slate-700'
                }`}
              >
                <Handshake className="w-4 h-4" />
                Partenariat
              </button>
            </div>
          </div>

          {/* 2. INFOS DE BASE (Nom & Entreprise) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">Votre Nom *</label>
              <input
                required
                type="text"
                placeholder="Ex: Moussa Sawadogo"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">Entreprise / Marque *</label>
              <input
                required
                type="text"
                placeholder="Ex: Boutique X"
                value={entreprise}
                onChange={(e) => setEntreprise(e.target.value)}
                className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
              />
            </div>
          </div>

          {/* 3. CASE BUDGET (UNIQUEMENT POUR PUBLICITÉ) */}
          {type === 'Publicité' && (
            <div>
              <label className="text-xs font-bold text-[#FFE135] uppercase tracking-wider block mb-1.5">
                Budget envisagé :
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135] cursor-pointer"
              >
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          )}

          {/* 4. CONTEXTE DE LA DEMANDE */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 block">
              {type === 'Partenariat' ? 'Contexte & Détails du partenariat *' : 'Précisions sur votre projet (optionnel)'}
            </label>
            <textarea
              required={type === 'Partenariat'}
              rows={2}
              placeholder={type === 'Partenariat' ? "Expliquez brièvement en quoi consiste le partenariat..." : "Détails sur votre produit ou service..."}
              value={contexte}
              onChange={(e) => setContexte(e.target.value)}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            ></textarea>
          </div>

          {/* BOUTON D'ENVOI */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Envoyer sur WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-slate-400 hover:text-white text-xs text-center py-1 cursor-pointer"
            >
              Fermer
            </button>
          </div>

        </form>
      )}
    </div>
  );
};