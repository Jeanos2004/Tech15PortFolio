// Fichier: src/app/(routes)/a-propos/page.tsx
'use client';


import About from '@/components/sections/About';
import Team from '@/components/sections/Team';

export default function AboutPage() {
  return (
    <div className="bg-amber-50" >
      <div className="mb-6 h-72 px-6 py-8 text-center" style={{backgroundImage : 'url(/images/pages/about-us.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1 className="text-5xl font-bold mb-4 text-gray-900">À propos de Tech 15</h1>
          <p className="text-gray-900 text-2xl">
            Une agence de publicité en ligne innovante qui vous accompagne dans votre développement digital
          </p>
        </div>
      
      <About theStyle={{normal: 'text-gray-700', title: 'text-gray-900'}}/>
      
      <div className="mt-16 px-12">
        <Team />
      </div>
    </div>
  );
}