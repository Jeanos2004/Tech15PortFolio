

export default function About() {
  return (
    <section className="py-16 px-12">
      <div className="container mx-auto px-4 text-gray-800">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-800">
          <div>
            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
            <p className="text-gray-600 mb-6">
              Offrir des services de publicité digitale accessibles et performants aux entreprises de toutes tailles en combinant créativité, stratégie et technologie.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-gray-600 mb-6">
              Devenir une référence en matière de marketing digital, en aidant nos clients à maximiser leur impact en ligne avec des stratégies publicitaires innovantes et abordables.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span><strong>Innovation</strong> - Nous recherchons constamment de nouvelles approches pour améliorer nos services.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span><strong>Qualité</strong> - Nous nous engageons à fournir un travail de la plus haute qualité.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span><strong>Transparence</strong> - Nous croyons en une communication ouverte et honnête avec nos clients.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expertise diversifiée</h4>
                  <p className="text-gray-600">Une équipe complète couvrant tous les aspects du marketing digital.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Solutions personnalisées</h4>
                  <p className="text-gray-600">Des stratégies adaptées à vos objectifs et à votre budget.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Approche innovante</h4>
                  <p className="text-gray-600">Des techniques modernes pour vous démarquer de la concurrence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}