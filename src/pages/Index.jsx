import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Första hero-sektionen */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <img 
            src="https://i.imgur.com/ImgujTd.png" 
            alt="Eyobel Samson" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Eyobel Samson</h1>
          <p className="text-xl md:text-2xl mb-8">DJ och Inspirerande Föreläsare</p>
          <Button className="bg-white text-black hover:bg-gray-200">Lär känna mig</Button>
        </div>
      </section>

      {/* Andra hero-sektionen: Tackla Dina Drömmar */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <img 
            src="https://i.imgur.com/P3WBicv.jpeg" 
            alt="Tackla Dina Drömmar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tackla Dina Drömmar</h2>
          <p className="text-lg md:text-xl mb-8 bg-black/50 p-4 rounded">
            Eyobel Samson är inte bara en talangfull DJ, utan också en inspirerande föreläsare 
            som hjälper människor att förverkliga sina drömmar. Med sin unika kombination av 
            musik och motivation, guidar Eyobel dig genom resan att övervinna hinder och nå dina mål.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200">Boka föreläsning</Button>
        </div>
      </section>

      {/* Tredje hero-sektionen: DJ-tjänster */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <img 
            src="https://i.imgur.com/etmrGsZ.png" 
            alt="DJ Eyobel Samson" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Upplev Musiken</h2>
          <p className="text-lg md:text-xl mb-8 bg-black/50 p-4 rounded">
            Som erfaren DJ skapar Eyobel Samson oförglömliga upplevelser genom att blanda 
            olika musikstilar och skapa den perfekta atmosfären för varje event. Från 
            intima klubbkvällar till stora festivaler, Eyobel levererar alltid en 
            energifylld och medryckande musikupplevelse.
          </p>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-black">Boka DJ-tjänster</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;