import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useInView } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.8, ease: "easeOut" }
};

const Hero = ({ imageSrc, title, description, buttonText, buttonAction, logoSrc, delay = false, isFirst = false }) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: delay ? 0.7 : 0, once: true });

  const firstHeroVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const variants = isFirst ? firstHeroVariants : fadeInUp;

  return (
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
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
      >
        {logoSrc ? (
          <>
            <img src={logoSrc} alt="Logo" className="mx-auto mb-6 max-w-lg" />
            <p className="text-lg md:text-xl mb-4 text-white">{description}</p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <a href="tel:+46700131356" className="flex items-center text-white hover:text-gray-300">
                <Phone size={20} className="mr-2" />
                <span className="text-sm md:text-base">+46 70-013 13 56</span>
              </a>
              <a href="mailto:bokning@eyoo.se" className="flex items-center text-white hover:text-gray-300">
                <Mail size={20} className="mr-2" />
                <span className="text-sm md:text-base">bokning@eyoo.se</span>
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h2>
            <p className="text-lg md:text-xl mb-8 text-white">{description}</p>
          </>
        )}
        <Button 
          className={isFirst ? "bg-white text-black hover:bg-gray-200" : "bg-transparent border border-white hover:bg-white hover:text-black"}
          onClick={buttonAction}
        >
          {buttonText}
        </Button>
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <a 
      href="https://renew-io.se" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white text-sm hover:text-gray-300 transition-colors"
    >
      Designed by Renew I/O
    </a>
  </div>
);

const Index = () => {
  const secondHeroRef = useRef(null);

  const scrollToSecondHero = () => {
    secondHeroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createEmailLink = (subject, body) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:bokning@eyoo.se?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const bookLecture = () => {
    const subject = "Förfrågan om föreläsning";
    const body = `Hej Eyobel,

Jag är intresserad av att boka dig för en föreläsning och skulle gärna vilja veta mer om de olika typer av föreläsningar du erbjuder. Kan du berätta mer om:

1. Vilka ämnen du föreläser om?
2. Vilka längder på föreläsningar som finns tillgängliga?
3. Hur innehållet skiljer sig mellan de olika föreläsningarna?

Dessutom skulle jag uppskatta information om dina tillgängliga datum och priser.

Tack på förhand!

Med vänliga hälsningar,
[Ditt namn]`;
    window.location.href = createEmailLink(subject, body);
  };

  const bookDJServices = () => {
    const subject = "Bokning av DJ-tjänster";
    const body = "Hej Eyobel,\n\nJag skulle vilja boka dina DJ-tjänster för ett event. Kan du ge mig mer information om dina tillgängliga datum och priser?\n\nMed vänliga hälsningar,\n[Ditt namn]";
    window.location.href = createEmailLink(subject, body);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        imageSrc="https://i.imgur.com/ImgujTd.png"
        logoSrc="https://i.imgur.com/0LHKV77.png"
        description="DJ och Inspirerande Föreläsare"
        buttonText="Lär känna mig"
        buttonAction={scrollToSecondHero}
        isFirst={true}
      />

      <div ref={secondHeroRef}>
        <Hero 
          imageSrc="https://i.imgur.com/P3WBicv.jpeg"
          title="Tackla Dina Drömmar"
          description="Eyobel Samson är inte bara en talangfull DJ, utan också en inspirerande föreläsare som hjälper människor att förverkliga sina drömmar. Med sin unika kombination av musik och motivation, guidar Eyobel dig genom resan att nå dina mål."
          buttonText="Boka föreläsning"
          buttonAction={bookLecture}
          delay={true}
        />
      </div>

      <Hero 
        imageSrc="https://i.imgur.com/etmrGsZ.png"
        title="Upplev Musiken"
        description="Som erfaren DJ skapar Eyobel Samson oförglömliga upplevelser genom att blanda olika musikstilar och skapa den perfekta atmosfären för varje event. Från intima klubbkvällar till stora festivaler, Eyobel levererar alltid en energifylld och medryckande musikupplevelse."
        buttonText="Boka DJ-tjänster"
        buttonAction={bookDJServices}
        delay={true}
      />

      <Footer />
    </div>
  );
};

export default Index;