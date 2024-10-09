import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero = ({ imageSrc, title, description, buttonText, buttonAction }) => (
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <motion.div 
      className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <p className="text-lg md:text-xl mb-8">{description}</p>
      <Button 
        className={buttonText === "Boka DJ-tjänster" ? "bg-transparent border border-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-gray-200"}
        onClick={buttonAction}
      >
        {buttonText}
      </Button>
    </motion.div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        imageSrc="https://i.imgur.com/ImgujTd.png"
        title="Eyobel Samson"
        description="DJ och Inspirerande Föreläsare"
        buttonText="Lär känna mig"
        buttonAction={() => console.log('Lär känna mig clicked')}
      />

      <Hero 
        imageSrc="https://i.imgur.com/P3WBicv.jpeg"
        title="Tackla Dina Drömmar"
        description="Eyobel Samson är inte bara en talangfull DJ, utan också en inspirerande föreläsare som hjälper människor att förverkliga sina drömmar. Med sin unika kombination av musik och motivation, guidar Eyobel dig genom resan att övervinna hinder och nå dina mål."
        buttonText="Boka föreläsning"
        buttonAction={() => console.log('Boka föreläsning clicked')}
      />

      <Hero 
        imageSrc="https://i.imgur.com/etmrGsZ.png"
        title="Upplev Musiken"
        description="Som erfaren DJ skapar Eyobel Samson oförglömliga upplevelser genom att blanda olika musikstilar och skapa den perfekta atmosfären för varje event. Från intima klubbkvällar till stora festivaler, Eyobel levererar alltid en energifylld och medryckande musikupplevelse."
        buttonText="Boka DJ-tjänster"
        buttonAction={() => console.log('Boka DJ-tjänster clicked')}
      />
    </div>
  );
};

export default Index;