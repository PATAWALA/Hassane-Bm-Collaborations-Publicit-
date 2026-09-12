import { HeaderProfile } from '@/components/HeaderProfile';
import { QualificationFlow } from '@/components/QualificationFlow';
import { creatorData } from '@/data/creator';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col justify-between p-4 md:p-8 font-sans">
      <div className="w-full">
        <HeaderProfile creator={creatorData} />
        <QualificationFlow creator={creatorData} />
      </div>

      <footer className="text-center text-slate-500 text-xs py-6">
        <p>© {creatorData.name} • Propulsé par Ckliko</p>
      </footer>
    </main>
  );
}