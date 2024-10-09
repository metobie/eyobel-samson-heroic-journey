import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero = ({ imageSrc, title, description, buttonText, buttonAction, logoSrc }) => (
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
    <motion.div 
      className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" className="mx-auto mb-6 max-w-sm" />
      ) : (
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h2>
      )}
      <p className="text-lg md:text-xl mb-8 text-white">{description}</p>
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
  const secondHeroRef = useRef(null);

  const scrollToSecondHero = () => {
    secondHeroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        imageSrc="https://i.imgur.com/ImgujTd.png"
        logoSrc="https://i.imgur.com/0LHKV77.png"
        description="DJ och Inspirerande Föreläsare"
        buttonText="Lär känna mig"
        buttonAction={scrollToSecondHero}
      />

      <div ref={secondHeroRef}>
        <Hero 
          imageSrc="https://i.imgur.com/P3WBicv.jpeg"
          title="Tackla Dina Drömmar"
          description="Eyobel Samson är inte bara en talangfull DJ, utan också en inspirerande föreläsare som hjälper människor att förverkliga sina drömmar. Med sin unika kombination av musik och motivation, guidar Eyobel dig genom resan att nå dina mål."
          buttonText="Boka föreläsning"
          buttonAction={() => console.log('Boka föreläsning clicked')}
        />
      </div>

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