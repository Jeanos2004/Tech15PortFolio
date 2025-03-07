
import ServiceCard from '@/components/ui/ServiceCard';

export default function Services() {
  const services = [
    {
      title: "Graphisme & Identité visuelle",
      description: "Création de logos, chartes graphiques et visuels attractifs pour vos réseaux sociaux.",
      imageUrl: "/images/services/graphisme.jpg",
      link: "/services#graphisme"
    },
    {
      title: "Gestion des réseaux sociaux",
      description: "Animation de vos pages, création de contenu et augmentation de votre engagement.",
      imageUrl: "/images/services/reseaux-sociaux.jpg",
      link: "/services#social-media"
    },
    {
      title: "Publicité en ligne & Stratégie",
      description: "Campagnes publicitaires ciblées et stratégies marketing digitales efficaces.",
      imageUrl: "/images/services/publicite.jpg",
      link: "/services#publicite"
    },
    {
      title: "Création de contenu vidéo",
      description: "Vidéos publicitaires, motion design et contenus optimisés pour les réseaux sociaux.",
      imageUrl: "/images/services/conception-videos.jpg",
      link: "/services#video"
    },
    {
      title: "Développement web & Branding",
      description: "Création de sites web, référencement SEO et solutions d'email marketing.",
      imageUrl: "/images/services/developpement-web.jpg",
      link: "/services#web"
    }
  ];

  return (
    <section className="py-10 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions modernes et efficaces pour booster votre présence en ligne
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
