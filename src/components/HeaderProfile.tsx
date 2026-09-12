import React from 'react';
import { CreatorProfile } from '@/types';
import { CheckCircle, Flame, Users, Radio } from 'lucide-react';

export const HeaderProfile = ({ creator }: { creator: CreatorProfile }) => {
  return (
    <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-700/60 flex flex-col justify-between h-full">
      <div>
        {/* Badge Disponible */}
        <div className="inline-flex items-center gap-2 bg-[#FFE135]/10 border border-[#FFE135]/30 text-[#FFE135] text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          Disponible pour collaborations
        </div>

        {/* Photo de profil HD + Gradient Glow */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto md:mx-0 mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFE135] to-[#E6C200] rounded-3xl blur-md opacity-40"></div>
          <img
            src={creator.avatarUrl}
            alt={creator.name}
            className="relative w-full h-full object-cover rounded-3xl border-2 border-[#FFE135]/80 shadow-2xl"
          />
        </div>

        {/* Titre & Bio */}
        <div className="text-center md:text-left space-y-2 mb-6">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-3xl md:text-4xl font-black text-white">{creator.name}</h1>
            <CheckCircle className="w-6 h-6 text-[#FFE135] fill-[#FFE135]/20" />
          </div>
          <p className="text-slate-400 font-medium text-sm">{creator.handle}</p>
          <p className="text-slate-300 text-sm leading-relaxed pt-2">
            {creator.bio}
          </p>
        </div>
      </div>

      {/* Grille de Chiffres Clés */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700/60">
        <div className="bg-[#0A1128]/80 p-3.5 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase mb-1">
            <Flame className="w-3.5 h-3.5 text-[#FFE135]" />
            TikTok
          </div>
          <p className="text-2xl font-black text-[#FFE135]">{creator.tiktokCount}</p>
        </div>

        <div className="bg-[#0A1128]/80 p-3.5 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase mb-1">
            <Users className="w-3.5 h-3.5 text-[#FFE135]" />
            Facebook
          </div>
          <p className="text-2xl font-black text-[#FFE135]">{creator.facebookCount}</p>
        </div>
      </div>
    </div>
  );
};