import { QualificationFlow } from '@/components/QualificationFlow';
import { creatorData } from '@/data/creator';
import { Flame, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col justify-between p-4 md:p-8 lg:p-12 font-sans max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* IMAGE GROSSE ET CLAIRE (Gagnante sur mobile et desktop) */}
        <div className="lg:col-span-5">
          <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden border-4 border-[#FFE135] shadow-2xl">
            <img
              src={creatorData.avatarUrl}
              alt={creatorData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DESCRIPTION + BOUTONS STRATÉGIQUES */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <h1 className="text-3xl md:text-5xl font-black text-white">{creatorData.name}</h1>
              <CheckCircle2 className="w-7 h-7 text-[#FFE135]" />
            </div>
            <p className="text-slate-400 font-bold text-sm mb-4">{creatorData.handle}</p>
            
            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl">
              {creatorData.bio}
            </p>
          </div>

          {/* STATS RAPIDES */}
          <div className="flex justify-center lg:justify-start gap-6 pt-2 pb-2">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#FFE135]" />
              <span className="font-black text-xl text-white">{creatorData.tiktokCount}</span>
              <span className="text-xs text-slate-400">TikTok</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#FFE135]" />
              <span className="font-black text-xl text-white">{creatorData.facebookCount}</span>
              <span className="text-xs text-slate-400">Facebook</span>
            </div>
          </div>

          {/* TUNNEL DE BOUTONS ACCESSIBLE DIRECTEMENT */}
          <QualificationFlow creator={creatorData} />

        </div>

      </div>

      <footer className="text-center text-slate-500 text-xs pt-8">
        <p>© {creatorData.name} • Propulsé par Ckliko</p>
      </footer>

    </main>
  );
}