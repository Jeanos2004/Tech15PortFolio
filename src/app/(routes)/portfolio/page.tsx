// Fichier : src/app/portfolio/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Les métadonnées ont été déplacées dans un fichier metadata.ts séparé

// Données des projets du portfolio
const portfolioProjects = [
  {
    id: 'projet-1',
    title: 'Refonte de marque - Café Parisien',
    category: 'Graphisme & Identité visuelle',
    description: 'Création d\'un nouveau logo, charte graphique et supports de communication pour une chaîne de cafés parisiens.',
    imageUrl: '/images/portfolio/projet-1.jpg',
    tags: ['Logo', 'Branding', 'Print'],
    link: '#'
  },
  {
    id: 'projet-2',
    title: 'Campagne Instagram - Mode Éthique',
    category: 'Gestion des réseaux sociaux',
    description: 'Stratégie de contenu et gestion des réseaux sociaux pour une marque de vêtements éthiques et durables.',
    imageUrl: '/images/portfolio/projet-2.jpg',
    tags: ['Instagram', 'Content Strategy', 'Community Management'],
    link: '#'
  },
  {
    id: 'projet-3',
    title: 'Publicité Google Ads - TechStart',
    category: 'Publicité en ligne & Stratégie',
    description: 'Campagne publicitaire Google Ads pour une startup tech avec un ROI de 300% sur 3 mois.',
    imageUrl: '/images/portfolio/projet-3.jpg',
    tags: ['Google Ads', 'SEM', 'Analytics'],
    link: '#'
  },
  {
    id: 'projet-4',
    title: 'Motion Design - Lancement de produit',
    category: 'Création de contenu vidéo',
    description: 'Vidéo explicative animée pour le lancement d\'un nouveau service digital avec plus de 50 000 vues.',
    imageUrl: '/images/portfolio/projet-4.jpg',
    tags: ['Motion Design', 'Animation', 'Product Launch'],
    link: '#'
  },
  {
    id: 'projet-5',
    title: 'Site E-commerce - Boutique Artisanale',
    category: 'Développement web & Branding',
    description: 'Conception et développement d\'une boutique en ligne pour un artisan local avec une augmentation des ventes de 75%.',
    imageUrl: '/images/portfolio/projet-5.jpg',
    tags: ['E-commerce', 'Web Design', 'UX/UI'],
    link: '#'
  },
  {
    id: 'projet-6',
    title: 'Campagne Facebook Ads - Festival de Musique',
    category: 'Publicité en ligne & Stratégie',
    description: 'Stratégie publicitaire sur Facebook et Instagram pour un festival de musique avec plus de 10 000 billets vendus.',
    imageUrl: '/images/portfolio/projet-6.jpg',
    tags: ['Facebook Ads', 'Event Marketing', 'Targeting'],
    link: '#'
  }
];

// Catégories pour le filtrage
const categories = [
  'Tous',
  'Graphisme & Identité visuelle',
  'Gestion des réseaux sociaux',
  'Publicité en ligne & Stratégie',
  'Création de contenu vidéo',
  'Développement web & Branding'
];

export default function PortfolioPage() {
  return (
    <>
      <div className=" text-white py-16 backdrop-opacity-70" style={{backgroundImage: 'url(/images/pages/porfolio-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Notre Portfolio</h1>
          <p className="text-xl max-w-2xl">
            Découvrez nos réalisations et comment nous avons aidé nos clients à atteindre leurs objectifs
          </p>
        </div>
      </div>
      
      <div className="bg-amber-50 mx-auto px-12 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Nos Réalisations</h2>
          
          {/* Filtres - Note: en version statique pour l'instant */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 m-2 rounded-full text-sm font-medium transition ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.link} 
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    Voir le projet →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section témoignages */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Ce que nos clients disent</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Sophie Martin</h3>
                  <p className="text-gray-600 text-sm">Directrice Marketing, Café Parisien</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;L&apos;équipe de Tech 15 a complètement transformé notre image de marque. Notre nouvelle identité visuelle a été très bien accueillie par nos clients et a contribué à une augmentation significative de notre fréquentation.&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Thomas Dubois</h3>
                  <p className="text-gray-600 text-sm">Fondateur, TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Grâce à la campagne Google Ads mise en place par Tech 15, nous avons pu acquérir de nouveaux clients à un coût très compétitif. Leur expertise en publicité digitale a été un véritable atout pour notre croissance.&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Julie Leroy</h3>
                  <p className="text-gray-600 text-sm">Artisane, Boutique Artisanale</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Mon site e-commerce développé par Tech 15 a complètement changé mon business. L&apos;interface est intuitive et mes clients adorent l&apos;expérience d&apos;achat. L&apos;interface est intuitive et mes clients adorent l&apos;expérience d&apos;achat. Mes ventes en ligne ont explosé depuis le lancement.&rdquo;
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Prêt à travailler ensemble ?</h2>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </>
  );
}