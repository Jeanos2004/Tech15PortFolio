// Fichier : src/components/ui/ServiceCard.jsx
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ServiceCard({ title, description, imageUrl, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link} 
          className="text-blue-600 font-medium hover:text-blue-800"
        >
          En savoir plus →
        </Link>
      </div>
    </div>
  );
}
