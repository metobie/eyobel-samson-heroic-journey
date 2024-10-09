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

      {/* Innehållssektion med ny bakgrundsbild */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <img 
            src="https://i.imgur.com/P3WBicv.jpeg" 
            alt="Bakgrund" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tackla Dina Drömmar</h2>
          <p className="text-lg mb-8 bg-black/50 p-4 rounded">
            Eyobel Samson är inte bara en talangfull DJ, utan också en inspirerande föreläsare 
            som hjälper människor att förverkliga sina drömmar. Med sin unika kombination av 
            musik och motivation, guidar Eyobel dig genom resan att övervinna hinder och nå dina mål.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">Boka föreläsning</Button>
            <Button className="bg-transparent border border-white hover:bg-white hover:text-black">DJ-tjänster</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;