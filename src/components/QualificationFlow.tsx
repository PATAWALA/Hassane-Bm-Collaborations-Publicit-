'use client';

import React, { useState } from 'react';
import { CreatorProfile } from '@/types';
import { Megaphone, Handshake, Send } from 'lucide-react';

const BUDGETS = [
  "50.000 - 150.000 FCFA",
  "150.000 - 300.000 FCFA",
  "Plus de 300.000 FCFA"
];

export const QualificationFlow = ({ creator }: { creator: CreatorProfile }) => {
  const [type, setType] = useState<'Publicité' | 'Partenariat' | null>(null);
  const [budget, setBudget] = useState(BUDGETS[0]);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type) return;

    const text = `Bonjour ${creator.name},%0A%0A` +
      `*Demande:* ${type}%0A` +
      `*Budget estimé:* ${budget}%0A` +
      `Je souhaite échanger sur une collaboration.`;

    window.open(`https://wa.me/${creator.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#FFE135] uppercase tracking-wider block">
          1. Choisissez votre objectif :
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setType('Publicité')}
            className={`py-4 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              type === 'Publicité'
                ? 'bg-[#FFE135] text-[#0A1128] ring-4 ring-white/20'
                : 'bg-[#FFE135] text-[#0A1128] hover:bg-[#ebd028]'
            }`}
          >
            <Megaphone className="w-5 h-5" />
            Demander une Publicité
          </button>

          <button
            type="button"
            onClick={() => setType('Partenariat')}
            className={`py-4 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              type === 'Partenariat'
                ? 'bg-[#FFE135] text-[#0A1128] ring-4 ring-white/20'
                : 'bg-[#FFE135] text-[#0A1128] hover:bg-[#ebd028]'
            }`}
          >
            <Handshake className="w-5 h-5" />
            Proposer un Partenariat
          </button>
        </div>
      </div>

      {type && (
        <form onSubmit={handleWhatsApp} className="bg-[#101D42] p-4 rounded-2xl border border-slate-700 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
              2. Budget envisagé pour votre demande de {type} :
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            >
              {BUDGETS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Contacter Hassane sur WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};