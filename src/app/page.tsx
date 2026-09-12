import { QualificationFlow } from '@/components/QualificationFlow';
import { creatorData } from '@/data/creator';
import { Flame, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A1128] text-white flex flex-col justify-between p-6 md:p-12 font-sans">
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* IMAGE ÉPURÉE SANS BORDURES NI CONTOURS */}
        <div className="lg:col-span-5 flex justify-center">
          <img
            src={creatorData.avatarUrl}
            alt={creatorData.name}
            className="w-full max-w-xs md:max-w-sm aspect-square object-contain"
          />
        </div>

        {/* DESCRIPTION + BOUTONS */}
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

          {/* STATS */}
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

          {/* BOUTONS D'ACTION */}
          <QualificationFlow creator={creatorData} />

        </div>

      </div>

      <footer className="text-center text-slate-500 text-xs pt-8">
        <p>© {creatorData.name} • Propulsé par Ckliko</p>
      </footer>

    </main>
  );
}