import { HeaderProfile } from '@/components/HeaderProfile';
import { QualificationFlow } from '@/components/QualificationFlow';
import { creatorData } from '@/data/creator';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col justify-between p-4 md:p-8 lg:p-12 font-sans max-w-7xl mx-auto">
      
      {/* HEADER DISCRET DESKTOP */}
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
        <span className="font-black text-lg tracking-wider text-[#FFE135]">HASSANE BM</span>
        <span className="text-xs text-slate-400">Espace Partenaires & Marques</span>
      </header>

      {/* DISPOSITION STRATÉGIQUE : 2 COLONNES DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
        
        {/* COLONNE GAUCHE (5/12) : Image, Humain & Stats */}
        <div className="lg:col-span-5 h-full">
          <HeaderProfile creator={creatorData} />
        </div>

        {/* COLONNE DROITE (7/12) : Qualification & Formulaire */}
        <div className="lg:col-span-7 bg-[#101D42]/60 p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">
              Lancer une campagne ou un partenariat
            </h2>
            <p className="text-slate-400 text-sm">
              Sélectionnez votre besoin ci-dessous pour être redirigé vers l'équipe commerciale sur WhatsApp.
            </p>
          </div>

          <QualificationFlow creator={creatorData} />
        </div>

      </div>

      {/* FOOTER */}
      <footer className="text-center text-slate-500 text-xs pt-12 pb-4">
        <p>© {creatorData.name} • Agence & Solutions Digitales par Ckliko</p>
      </footer>

    </main>
  );
}