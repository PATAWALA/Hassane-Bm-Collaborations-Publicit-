import React from 'react';
import { CreatorProfile } from '@/types';

export const HeaderProfile = ({ creator }: { creator: CreatorProfile }) => {
  return (
    <div className="text-center pt-6 pb-4">
      <div className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-[#FFE135] bg-slate-800 flex items-center justify-center text-[#FFE135] font-black text-2xl shadow-lg shadow-[#FFE135]/20">
        HBM
      </div>

      <h1 className="text-2xl font-black text-white">{creator.name}</h1>
      <p className="text-slate-400 text-xs mb-4">{creator.handle}</p>

      <div className="grid grid-cols-2 gap-3 bg-[#101D42] p-3 rounded-xl border border-slate-700/60 max-w-xs mx-auto">
        <div>
          <p className="text-[#FFE135] font-black text-lg">{creator.tiktokCount}</p>
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">TikTok</p>
        </div>
        <div>
          <p className="text-[#FFE135] font-black text-lg">{creator.facebookCount}</p>
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Facebook</p>
        </div>
      </div>
    </div>
  );
};