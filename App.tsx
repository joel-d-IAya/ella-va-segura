
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DoubleImpactSection } from './components/DoubleImpactSection';
import { Features } from './components/Features';
import { ImpactSection } from './components/ImpactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WelcomeModal } from './components/WelcomeModal';

export type Language = 'es' | 'en';

export const content = {
  es: {
    nav: { problem: "El Problema", impact: "Doble Impacto", solution: "La Solución", projections: "Proyecciones", contact: "Únete" },
    hero: {
      badge: "ELLA VA SEGURA",
      title: "Cuenca, Líder en Movilidad Segura e Inclusiva en América Latina",
      subtitle: "MÁS QUE TRANSPORTE, UN DERECHO",
      desc: "Moverse sin miedo no debería ser un lujo. En Cuenca, cada día, miles de mujeres adaptan sus rutas, evitan salir de noche o pierden oportunidades profesionales por miedo a su seguridad en el transporte público. 'Ella Va Segura' nació de una convicción simple pero poderosa: la movilidad es la condición primera de la libertad. Al crear un espacio de transporte seguro por y para mujeres, no solo resolvemos un problema logístico; restauramos la dignidad, la autonomía y la tranquilidad a la mitad de la población de nuestra ciudad.",
      ambition: "NUESTRA AMBICIÓN: Convertir a Cuenca en la ciudad pionera en Ecuador en movilidad segura para mujeres, creando al mismo tiempo una potente palanca de inserción económica para madres y mujeres desempleadas, a través de un modelo de transporte inclusivo e innovador.",
      cta1: "Únete al Movimiento",
      cta2: "Ver Video"
    },
    story: {
      title: "Nuestra Historia: De la App Técnica al Impacto Social",
      p1: "El proyecto Ella va Segura nació de una conversación clave entre Joël y Santiago: la urgencia de crear una aplicación de taxi exclusivamente para mujeres en Cuenca.",
      p2: "Técnicamente, desarrollar la app no era un problema. Sin embargo, nos enfrentamos rápidamente a un reto logístico mucho mayor: la oferta no cubría la necesidad. La escasez de mujeres conductoras de taxi en Cuenca hacía inviable un servicio puramente digital.",
      p3: "Comprendimos que no bastaba con crear una plataforma; debíamos iniciar un proyecto social para crear la oferta de empleo.",
      p4: "Esta landing page tiene un propósito fundamental: encontrar socios y aliados estratégicos que nos ayuden a construir este servicio desde la base, ofreciendo nuevas perspectivas económicas y una movilidad segura a las mujeres de Cuenca.",
      button: "Entrar al Sitio"
    },
    problem: {
      sectionLabel: "I. EL PROBLEMA",
      title: "La Inseguridad Ecuatoriana Limita la Movilidad de Casi la Mitad de las Mujeres Jóvenes.",
      stats: [
        "65% de las mujeres víctimas de violencia (Nacional).",
        "Más de 4 de cada 10 mujeres se sienten inseguras en el transporte.",
        "Más del 50% de las mujeres de 18-34 años renuncian a desplazarse solas."
      ],
      context: "Comencemos con el contexto social en Ecuador. Las estadísticas son claras: el 65% de las mujeres han sido víctimas de al menos una forma de violencia en sus vidas... La consecuencia directa es dramática: entre las mujeres jóvenes, más del 50% renuncian a desplazarse solas, por miedo. Este ya no es solo un problema de seguridad, es un freno a la autonomía económica y a la vida social de las cuencanas."
    },
    doubleImpact: {
      sectionLabel: "II. EL DOBLE IMPACTO",
      items: [
        {
          title: "1. La Urgencia Social: Empleo Estable y Digno para Madres",
          bullets: [
            "Barreras de acceso a empleo estable para madres.",
            "Plataforma de Empoderamiento Económico.",
            "Promesa de formación y acompañamiento integral."
          ],
          text: "\"Nuestra solución va más allá del transporte. Responde a una urgencia social: la dificultad para muchas mujeres de encontrar un empleo estable y flexible... Ella va Segura promete ser una plataforma de empoderamiento económico. No solo proponemos un trabajo, sino una formación integral y un acompañamiento que abre las puertas a una fuente de ingresos digna y segura.\""
        },
        {
          title: "2. Seguridad y Eficacia: El Factor Conductora",
          bullets: [
            "Estadísticas: Las conductoras son más prudentes.",
            "Menos infracciones y menos accidentes graves.",
            "Ventaja Operacional: Costos de seguro reducidos y mayor fiabilidad."
          ],
          text: "\"El empleo de mujeres es también una ventaja operacional y de seguridad... Al elegir exclusivamente a mujeres, integramos de forma nativa una mayor prudencia que se traduce en mayor seguridad para la pasajera y mejor rentabilidad para el servicio.\""
        },
        {
          title: "3. El Compromiso con la Seguridad: Doble Protección en la Ciudad",
          bullets: [
            "Malla de seguridad y aumento de vehículos vigilados.",
            "Factor de confianza visible.",
            "Nuestro compromiso: Proteger a la pasajera y al espacio público."
          ],
          text: "\"El proyecto está diseñado para ser una malla de seguridad. Nuestro compromiso es el de una Doble Protección: por supuesto, proteger a la pasajera durante su trayecto, pero también aumentar el número de vehículos vigilados y controlados en el espacio público de Cuenca, actuando así como un elemento disuasorio y un factor de confianza visible...\""
        }
      ]
    },
    solution: {
      sectionLabel: "III. LA SOLUCIÓN",
      items: [
        { 
          title: "1. Un Modelo Pionero: Cuenca, Líder en Seguridad en América Latina", 
          bullets: [
            "Primer servicio piloto de este tipo en Ecuador.",
            "Posicionamiento de Cuenca como ciudad pionera.",
            "Innovación social y de seguridad."
          ],
          text: "\"Cuenca tiene la oportunidad de entrar en la historia de la seguridad urbana... Al apoyarnos, posicionan a Cuenca como una ciudad pionera en innovación social y seguridad de las mujeres.\"" 
        },
        { 
          title: "2. La Eficacia del Híbrido: Alianza y Optimización para la Comunidad Taxi", 
          bullets: [
            "Modelo Híbrido: Vehículos privados (Ejecutivo) + Compañías de Taxi socias.",
            "Optimización del tiempo de trabajo de las conductoras existentes.",
            "Refuerzo de la flota disponible."
          ],
          text: "\"Proponemos un modelo híbrido y no disruptivo... Esto permite a sus conductoras optimizar su tiempo de trabajo garantizando un alto nivel de seguridad, fortaleciendo así la flota disponible sin desestabilizar el mercado.\"" 
        },
        { 
          title: "3. Seguridad de la Conductora: Cero Efectivo, Cero Riesgo", 
          bullets: [
            "Pago sin efectivo (Tarjeta, Prepago, Móvil).",
            "Minimización del riesgo de agresión por manejo de efectivo.",
            "Sistema de Caja Fuerte Segura para intercambios residuales."
          ],
          text: "\"La seguridad de la conductora es primordial... Priorizamos el pago sin efectivo... Para intercambios residuales, contamos con un sistema de caja fuerte segura. Es una solución tecnológica para garantizar una flexibilidad segura.\"" 
        },
        { 
          title: "4. Seguridad de la Pasajera: La Experiencia \"Ella va Segura\"", 
          bullets: [
            "Identificación clara de la conductora.",
            "Cámaras a bordo discretas.",
            "Botón de Emergencia (App) con Seguimiento GPS en tiempo real."
          ],
          text: "\"La experiencia de la pasajera está enmarcada por la tecnología... Garantizamos: identificación clara, cámaras a bordo, y sobre todo un botón de emergencia en la aplicación que, al activarse, permite el seguimiento GPS en tiempo real... La seguridad es constante, trazable y reactiva.\"" 
        },
        {
          title: "5. Proceso de Calidad: Reclutamiento y Formación Adecuada",
          bullets: [
            "Reclutamiento estricto de candidatas.",
            "Formación integral (Conducción, Servicio al cliente, Gestión de crisis).",
            "Garantía de la mejor experiencia para las pasajeras."
          ],
          text: "\"La calidad de nuestro servicio se basa en la calidad de nuestras conductoras... Nuestro proceso de reclutamiento es riguroso, y se acompaña de una formación adecuada... Garantizamos así la mejor experiencia profesional y la mayor seguridad para nuestras clientas.\""
        }
      ]
    },
    impact: {
      sectionLabel: "IV. LOS IMPACTOS (PROYECCIONES)",
      items: [
        { 
          title: "1. El Impacto Social: 50 Empleos Estables para la Autonomía Femenina", 
          bullets: [
            "Creación de 50 Empleos Directos (Año 1).",
            "Empleos flexibles y dignos.",
            "Compromiso con la estabilidad familiar y el crecimiento local."
          ],
          text: "\"Nuestro objetivo social es concreto: crear 50 empleos directos desde el primer año. Es nuestro compromiso cuantificado a favor de la autonomía de las mujeres de Cuenca... Un empleo digno y seguro es un pilar de la estabilidad familiar y del crecimiento económico local.\"" 
        },
        { 
          title: "2. El Impacto Operacional: +15,000 Carreras Seguras Desde el Año 1", 
          bullets: [
            "Proyección: +15,000 Carreras Seguras realizadas.",
            "Medida de éxito: Número de veces que el miedo fue reemplazado por la fiabilidad.",
            "Respuesta cuantificada a la demanda."
          ],
          text: "\"Desde el punto de vista operacional, proyectamos realizar más de 15,000 carreras seguras durante nuestro primer año... Esta cifra no solo mide nuestro éxito, mide el número de veces que habremos permitido a una mujer desplazarse sin miedo, de forma fluida y fiable.\"" 
        },
        { 
          title: "3. El Impacto en la Imagen: Cuenca, Destino Seguro y Moderno", 
          bullets: [
            "Mejora de la imagen de Cuenca a nivel internacional.",
            "Atracción para el Turismo, Expats Seniors y Trabajadoras Nómadas.",
            "Cuenca, modelo de seguridad urbana responsable."
          ],
          text: "\"Al resolver el problema de la inseguridad en el transporte, ofrecemos un beneficio indirecto mayor a Cuenca: su atractivo... Ella va Segura es una tarjeta de presentación internacional para una ciudad responsable.\"" 
        },
        { 
          title: "4. El Impacto Humano: Reducción Fáctica de la Inseguridad", 
          bullets: [
            "Objetivo cualitativo principal del servicio.",
            "Reducción fáctica del sentimiento de inseguridad nocturna.",
            "Garantía de la libertad de circulación sin angustia para las mujeres."
          ],
          text: "\"Finalmente, el resultado más importante es cualitativo: proyectamos una reducción fáctica del sentimiento de inseguridad nocturna en nuestras usuarias. No es una cifra, es una libertad recuperada. Es la esencia misma de nuestra misión.\"" 
        }
      ]
    },
    cta: {
      sectionLabel: "V. LLAMADA A LA ACCIÓN",
      title: "Únete al Movimiento: Ofrezcamos una vida mejor a las Cuencanas.",
      bullets: [
        "El Proyecto es Viable, pero requiere un Impulso Institucional.",
        "Eje 1: Reclutamiento y Formación (Licencia Profesional, Defensa Personal).",
        "Eje 2: Marco Legal ('Sello Violeta', Facilitación de permisos).",
        "Eje 3: Credibilidad (Integración al plan piloto 'Cuenca Ciudad Segura')."
      ],
      desc: "\"El proyecto es económicamente viable y socialmente necesario... Solicitamos su apoyo en tres ejes claros... Únanse a esta iniciativa para hacer de Cuenca un verdadero modelo de seguridad y autonomía para las mujeres.\"",
      button: "Únete Ahora"
    }
  },
  en: {
    nav: { problem: "The Problem", impact: "Double Impact", solution: "The Solution", projections: "Projections", contact: "Join Us" },
    hero: {
      badge: "ELLA VA SEGURA",
      title: "Cuenca, Leader in Safe and Inclusive Mobility in Latin America",
      subtitle: "MORE THAN TRANSPORT, A RIGHT",
      desc: "Moving without fear should not be a luxury. In Cuenca, every day, thousands of women adapt their routes, avoid going out at night, or miss out on professional opportunities for fear of their safety on public transport. 'Ella Va Segura' was born from a simple yet powerful conviction: mobility is the primary condition for freedom. By creating a safe transportation space run by and for women, we are not just solving a logistical problem; we are restoring dignity, autonomy, and peace of mind to half of our city's population.",
      ambition: "OUR AMBITION: To make Cuenca the pioneer city in Ecuador for safe mobility for women, while creating a powerful lever for economic insertion for mothers and unemployed women, through an inclusive and innovative transport model.",
      cta1: "Join the Movement",
      cta2: "Watch Video"
    },
    story: {
      title: "Our Story: From Technical App to Social Impact",
      p1: "The Ella va Segura project was born from a key conversation between Joël and Santiago: the urgency to create a taxi application exclusively for women in Cuenca.",
      p2: "Technically, developing the app was not a problem. However, we quickly faced a much larger logistical challenge: supply did not meet demand. The scarcity of female taxi drivers in Cuenca made a purely digital service unviable.",
      p3: "We understood that it was not enough to create a platform; we had to initiate a social project to create the job supply.",
      p4: "This landing page has a fundamental purpose: to find strategic partners and allies to help us build this service from the ground up, offering new economic perspectives and safe mobility to the women of Cuenca.",
      button: "Enter Site"
    },
    problem: {
      sectionLabel: "I. THE PROBLEM",
      title: "Ecuadorian Insecurity Restricts Mobility for Nearly Half of Young Women.",
      stats: [
        "65% of women are victims of violence (National data).",
        "Over 4 in 10 women feel unsafe in public transit.",
        "Over 50% of women aged 18-34 give up traveling alone."
      ],
      context: "Let's start with the social context in Ecuador. Statistics are clear: 65% of women have been victims of at least one form of violence in their lives... The direct consequence is dramatic: among young women, over 50% give up traveling alone due to fear. This is no longer just a security issue; it's a barrier to economic autonomy and social life for the women of Cuenca."
    },
    doubleImpact: {
      sectionLabel: "II. THE DOUBLE IMPACT",
      items: [
        {
          title: "1. The Social Imperative: Stable and Dignified Employment for Mothers",
          bullets: [
            "Barriers to stable employment for mothers.",
            "Economic Empowerment Platform.",
            "Commitment to comprehensive training and support."
          ],
          text: "\"Our solution goes beyond transportation. It addresses a social imperative: the difficulty for many women to find stable, flexible employment... Ella va Segura is poised to be an Economic Empowerment Platform. We offer not just a job, but comprehensive training and support that opens the door to a secure and dignified source of income.\""
        },
        {
          title: "2. Safety and Efficiency: The Driver Factor",
          bullets: [
            "Statistics: Female drivers demonstrate greater caution.",
            "Fewer violations and reduced risk of serious accidents.",
            "Operational Advantage: Lower insurance costs and increased reliability."
          ],
          text: "\"The employment of women is also an operational and safety advantage... By exclusively choosing women, we inherently integrate a higher level of caution which translates to greater passenger safety and better service profitability.\""
        },
        {
          title: "3. The Security Commitment: Dual Protection for the City",
          bullets: [
            "Security network and increased number of monitored vehicles.",
            "Visible factor of community trust.",
            "Our commitment: Protecting the passenger and the public space."
          ],
          text: "\"The project is designed as a security network. Our commitment is one of Dual Protection: naturally, protecting the passenger during her ride, but also increasing the number of monitored, controlled vehicles in Cuenca's public spaces, acting as a deterrent and a visible factor of confidence...\""
        }
      ]
    },
    solution: {
      sectionLabel: "III. THE SOLUTION",
      items: [
        { 
          title: "1. A Pioneering Model: Cuenca, Latin American Leader in Safety", 
          bullets: [
            "First pilot service of its kind in Ecuador.",
            "Positioning Cuenca as a pioneer city.",
            "Social and security innovation."
          ],
          text: "\"Cuenca has the opportunity to make history in urban safety... By supporting us, you position Cuenca as a pioneer city in social innovation and women's safety.\"" 
        },
        { 
          title: "2. The Efficiency of the Hybrid: Partnership and Optimization for the Taxi Community", 
          bullets: [
            "Hybrid Model: Private vehicles (Executive) + Partner Taxi Companies.",
            "Optimization of working hours for existing female drivers.",
            "Strengthening the available fleet."
          ],
          text: "\"We propose a hybrid and non-disruptive model... This allows partner drivers to optimize their working hours while guaranteeing a high level of safety, thus strengthening the available fleet without market disruption.\"" 
        },
        { 
          title: "3. Driver Safety: Zero Cash, Zero Risk", 
          bullets: [
            "Cashless payment (Card, Pre-paid, Mobile).",
            "Minimizing the risk of assault related to cash handling.",
            "Secure Safe-Box System for residual exchanges."
          ],
          text: "\"Driver safety is paramount... We prioritize cashless payment... For any residual cash exchanges, a secure Safe-Box system is in place. This is a technological solution to guarantee safe flexibility.\"" 
        },
        { 
          title: "4. Passenger Safety: The \"Ella va Segura\" Experience", 
          bullets: [
            "Clear driver identification.",
            "Discreet onboard cameras.",
            "Emergency Button (App) with Real-Time GPS Tracking."
          ],
          text: "\"The passenger experience is secured by technology... We guarantee: clear identification, onboard cameras, and critically, an Emergency Button in the app that, when activated, allows for real-time GPS tracking... Safety is constant, traceable, and reactive.\"" 
        },
        {
          title: "5. Quality Process: Strict Recruitment and Adequate Training",
          bullets: [
            "Rigorous candidate recruitment.",
            "Comprehensive training (Driving, Customer service, Crisis management).",
            "Guaranteeing the best experience for passengers."
          ],
          text: "\"The quality of our service rests on the quality of our drivers... Our recruitment process is rigorous, and it is coupled with adequate training... We thus guarantee the best professional experience and the highest safety for our clients.\""
        }
      ]
    },
    impact: {
      sectionLabel: "IV. THE IMPACTS (PROJECTIONS)",
      items: [
        { 
          title: "1. Social Impact: 50 Stable Jobs for Female Autonomy", 
          bullets: [
            "Creation of 50 Direct Jobs (Year 1).",
            "Flexible and dignified employment.",
            "Commitment to family stability and local growth."
          ],
          text: "\"Our social objective is concrete: creating 50 direct jobs from the first year. This is our quantified commitment to the autonomy of Cuenca's women... A secure, dignified job is a pillar of family stability and local economic growth.\"" 
        },
        { 
          title: "2. Operational Impact: +15,000 Safe Rides Since Year 1", 
          bullets: [
            "Projection: +15,000 Safe Rides (Carreras Seguras) realized.",
            "Success metric: The number of times fear was replaced by reliability.",
            "Quantified response to demand."
          ],
          text: "\"From an operational standpoint, we project to execute over 15,000 Safe Rides during our first year... This figure measures not just our success, but the number of times we will have allowed a woman to travel without fear, fluidly and reliably.\"" 
        },
        { 
          title: "3. Image Impact: Cuenca, Safe and Modern Destination", 
          bullets: [
            "Improvement of Cuenca's image internationally.",
            "Attraction for Tourism, Senior Expats, and Digital Nomads.",
            "Cuenca, a model of responsible urban safety."
          ],
          text: "\"By solving the issue of transport insecurity, we offer a major indirect benefit to Cuenca: its attractiveness... Ella va Segura is an international calling card for a responsible city.\"" 
        },
        { 
          title: "4. Human Impact: Factual Reduction of Insecurity", 
          bullets: [
            "Primary qualitative objective of the service.",
            "Factual reduction of the feeling of nighttime insecurity.",
            "Guaranteeing women the freedom to move without anxiety."
          ],
          text: "\"Finally, the most important outcome is qualitative: we project a factual reduction in the feeling of nighttime insecurity among our users. This is not a number; it's a freedom regained. It is the very essence of our mission.\"" 
        }
      ]
    },
    cta: {
      sectionLabel: "V. CALL TO ACTION",
      title: "Join the Movement: Let's Offer a Better Life to the Women of Cuenca.",
      bullets: [
        "The Project is Viable, but requires Institutional Momentum.",
        "Axis 1: Recruitment and Training (Professional License, Self-Defense).",
        "Axis 2: Legal Framework ('Sello Violeta', Permit facilitation).",
        "Axis 3: Credibility (Integration into the 'Cuenca Ciudad Segura' pilot plan)."
      ],
      desc: "\"The project is economically viable and socially necessary... We request your support across three clear axes... Join us in this initiative to make Cuenca a true model of safety and autonomy for women.\"",
      button: "Support the Initiative"
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedEllaVaSegura');
    if (!hasVisited) {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem('hasVisitedEllaVaSegura', 'true');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden text-slate-800">
      <Header lang={lang} setLang={setLang} content={content[lang].nav} />
      <main className="flex-grow">
        <Hero lang={lang} content={content[lang].hero} />
        <ProblemSection content={content[lang].problem} />
        <DoubleImpactSection content={content[lang].doubleImpact} />
        <Features content={content[lang].solution} />
        <ImpactSection content={content[lang].impact} />
        <CTASection content={content[lang].cta} />
      </main>
      <Footer lang={lang} />
      
      {showModal && (
        <WelcomeModal 
          lang={lang} 
          setLang={setLang} 
          content={content[lang].story} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;
