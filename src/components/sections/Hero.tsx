
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-purple-200 text-white py-20" style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity : 0.9 }}>
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions digitales innovantes pour votre entreprise
          </h1>
          <p className="text-xl mb-8">
            Tech 15 vous aide à améliorer votre visibilité digitale avec des <strong className="text-orange-500 text-3xl">solutions</strong> modernes et efficaces.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/services" 
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition text-center"
            >
              Nos services
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 hover:border-white transition text-center"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
