
// Fichier : src/app/page.js
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team /> 
    </>
  );
}
