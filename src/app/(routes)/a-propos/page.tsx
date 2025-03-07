// Fichier : src/app/a-propos/page.js
import { teamData } from '@/lib/data';
import Image from 'next/image';

export const metadata = {
  title: 'À propos | Tech 15',
  description: 'Découvrez Tech 15, une agence de publicité en ligne innovante qui aide les entreprises à améliorer leur visibilité digitale.',
};

export default function AboutPage() {
  return (
    <>
      <div className="text-white py-16" style={{backgroundImage : 'url(/images/pages/about-us.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">À propos de Tech 15</h1>
          <p className="text-xl max-w-2xl">
            Une agence de publicité en ligne innovante qui vous accompagne dans votre développement digital
          </p>
        </div>
      </div>
      
      <div className="bg-amber-50 mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Tech 15 est une agence de publicité en ligne qui aide les entreprises, influenceurs et entrepreneurs à
              améliorer leur visibilité digitale. Nous proposons des solutions modernes et efficaces pour booster
              leur présence en ligne à travers le graphisme, la gestion des réseaux sociaux, la publicité ciblée et la
              création de contenu.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800 mt-8">Notre Mission</h3>
            <p className="text-gray-600 mb-6">
              Offrir des services de publicité digitale accessibles et performants aux entreprises de toutes tailles en
              combinant créativité, stratégie et technologie.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">Notre Vision</h3>
            <p className="text-gray-600">
              Devenir une référence en matière de marketing digital, en aidant nos clients à maximiser leur impact
              en ligne avec des stratégies publicitaires innovantes et abordables.
            </p>
          </div>
          <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Pourquoi nous choisir ?</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Expertise diversifiée</h4>
                  <p className="text-gray-600">Une équipe complète couvrant tous les aspects du marketing digital.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Solutions personnalisées</h4>
                  <p className="text-gray-600">Des stratégies adaptées à vos objectifs et à votre budget.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Approche innovante</h4>
                  <p className="text-gray-600">Des techniques modernes pour vous démarquer de la concurrence.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Résultats mesurables</h4>
                  <p className="text-gray-600">Des rapports détaillés pour suivre votre retour sur investissement.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-100 h-48 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.role}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}