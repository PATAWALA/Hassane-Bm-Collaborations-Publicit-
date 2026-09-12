'use client';

import React, { useState } from 'react';
import { LeadType, LeadData, CreatorProfile } from '@/types';
import { Megaphone, Handshake, Check, Send } from 'lucide-react';

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
      `*Budget sélectionné:* ${leadData.budget}%0A` +
      `*Détails du projet:* ${leadData.message}`;

    window.open(`https://wa.me/${creator.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* ÉTAPE 1 : SELECTION DU BESOIN */}
      {step === 1 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-200 text-center mb-2">
            Sélectionnez votre objectif :
          </p>
          <button
            onClick={() => selectType('publicite')}
            className="w-full bg-[#FFE135] hover:bg-[#ebd028] text-[#0A1128] font-extrabold py-4 px-5 rounded-2xl flex items-center justify-center gap-3 text-base shadow-lg shadow-[#FFE135]/10 active:scale-95 transition-all"
          >
            <Megaphone className="w-5 h-5" />
            Demander une Publicité
          </button>

          <button
            onClick={() => selectType('partenariat')}
            className="w-full bg-[#FFE135] hover:bg-[#ebd028] text-[#0A1128] font-extrabold py-4 px-5 rounded-2xl flex items-center justify-center gap-3 text-base shadow-lg shadow-[#FFE135]/10 active:scale-95 transition-all"
          >
            <Handshake className="w-5 h-5" />
            Proposer un Partenariat
          </button>
        </div>
      )}

      {/* ÉTAPE 2 : SELECTION DU BUDGET */}
      {step === 2 && (
        <div className="bg-[#101D42] p-5 rounded-2xl border border-slate-700/60 shadow-xl space-y-4">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
            <span className="text-xs font-bold text-[#FFE135] uppercase">
              Étape 2/3 : Votre Budget
            </span>
            <button onClick={() => setStep(1)} className="text-slate-400 text-xs underline">
              Retour
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b}
                onClick={() => selectBudget(b)}
                className="w-full text-left bg-[#0A1128] hover:border-[#FFE135] border border-slate-700 p-3 rounded-xl text-sm font-semibold text-white transition-all flex justify-between items-center"
              >
                {b}
                <Check className="w-4 h-4 text-[#FFE135] opacity-0 hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ÉTAPE 3 : FORMULAIRE FINAL */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="bg-[#101D42] p-5 rounded-2xl border border-slate-700 shadow-xl space-y-3">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
            <span className="text-xs font-bold text-[#FFE135] uppercase">
              Dernière étape : Vos infos
            </span>
            <button onClick={() => setStep(2)} className="text-slate-400 text-xs underline">
              Modifier budget
            </button>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Votre Nom / Prénom *</label>
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
              placeholder="Ex: Placement de produit dans la prochaine vidéo..."
              value={leadData.message}
              onChange={(e) => setLeadData({ ...leadData, message: e.target.value })}
              className="w-full bg-[#0A1128] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#FFE135]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFE135] text-[#0A1128] font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            Envoyer sur WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};