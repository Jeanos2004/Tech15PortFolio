// Fichier : src/app/services/page.js
import { servicesData } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Nos Services | Tech 15',
  description: 'Découvrez nos services de marketing digital: graphisme, gestion des réseaux sociaux, publicité en ligne, création vidéo et développement web.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="text-white py-24 h-96" style={{backgroundImage : 'url(/images/pages/services-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl max-w-2xl">
            Des solutions digitales complètes pour booster votre présence en ligne et vous démarquer de la concurrence
          </p>
        </div>
      </div>
      
      <div className="bg-amber-50 mx-auto px-12 py-16">
        {servicesData.map((service, index) => (
          <div key={service.id} id={service.id} className={`mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center`}>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image 
                  src={service.imageUrl} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ce que nous proposons :</h3>
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}