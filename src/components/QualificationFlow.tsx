'use client';

import React, { useState } from 'react';
import { LeadType, LeadData, CreatorProfile } from '@/types';
import { Megaphone, Handshake, Check, Send, Sparkles } from 'lucide-react';

const BUDGET_OPTIONS = [
  "50.000 - 150.000 FCFA",
  "150.000 - 300.000 FCFA",
  "300.000 - 500.000 FCFA",
  "Plus de 500.000 FCFA"
];

export const QualificationFlow = ({ creator }: { creator: CreatorProfile }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [leadData, setLeadData] = useState<LeadData>({
    type: null,
    budget: '',
    nom: '',
    entreprise: '',
    message: ''
  });

  const selectType = (type: LeadType) => {
    setLeadData((prev) => ({ ...prev, type }));
    setStep(2);
  };

  const selectBudget = (budget: string) => {
    setLeadData((prev) => ({ ...prev, budget }));
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = leadData.type === 'publicite' ? 'PUBLICITÉ' : 'PARTENARIAT';

    const text = `Bonjour ${creator.name},%0A%0A` +
      `*Demande:* ${typeLabel}%0A` +
      `*Nom/Entreprise:* ${leadData.nom} (${leadData.entreprise})%0A` +
      `*Budget:* ${leadData.budget}%0A` +
      `*Projet:* ${leadData.message}`;

    window.open(`https://wa.me/${creator.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {step === 1 && (
        <div className="space-y-4">
          
          {/* INCITATION AU CALL-TO-ACTION */}
          <div className="bg-[#0A1128] p-4 rounded-2xl border border-slate-800 text-center">
            <p className="text-[#FFE135] font-extrabold text-sm md:text-base flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Prêt à booster la visibilité de votre marque ?
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Sélectionnez une option ci-dessous pour démarrer directement votre projet sur WhatsApp.
            </p>
          </div>

          <button
            onClick={() => selectType('publicite')}
            className="w-full btn-banana-gradient font-black py-4 px-5 rounded-2xl flex items-center justify-center gap-3 text-base cursor-pointer"
          >
            <Megaphone className="w-5 h-5" />
            Demander une Publicité
          </button>

          <button
            onClick={() => selectType('partenariat')}
            className="w-full btn-banana-gradient font-black py-4 px-5 rounded-2xl flex items-center justify-center gap-3 text-base cursor-pointer"
          >
            <Handshake className="w-5 h-5" />
            Proposer un Partenariat
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
            <span className="text-xs font-bold text-[#FFE135] uppercase">Étape 2/3 : Budget prévu</span>
            <button onClick={() => setStep(1)} className="text-slate-400 text-xs underline cursor-pointer">Retour</button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b}
                onClick={() => selectBudget(b)}
                className="w-full text-left bg-[#0A1128] hover:border-[#FFE135] border border-slate-700 p-3.5 rounded-xl text-sm font-semibold text-white transition-all flex justify-between items-center cursor-pointer"
              >
                {b}
                <Check className="w-4 h-4 text-[#FFE135]" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
            <span className="text-xs font-bold text-[#FFE135] uppercase">Étape 3/3 : Coordonnées</span>
            <button onClick={() => setStep(2)} className="text-slate-400 text-xs underline cursor-pointer">Modifier budget</button>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Votre Nom *</label>
            <input
              required
              type="text"
              placeholder="Ex: Moussa Sawadogo"
              value={leadData.nom}
              onChange={(e) => setLeadData({ ...leadData, nom: e.target.value })}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Entreprise / Marque *</label>
            <input
              required
              type="text"
              placeholder="Ex: Boutique X"
              value={leadData.entreprise}
              onChange={(e) => setLeadData({ ...leadData, entreprise: e.target.value })}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Résumé du projet *</label>
            <textarea
              required
              rows={2}
              placeholder="Description rapide..."
              value={leadData.message}
              onChange={(e) => setLeadData({ ...leadData, message: e.target.value })}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-banana-gradient font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Envoyer sur WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};