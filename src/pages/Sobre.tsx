
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Sobre Nós
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          {/* Nossa História */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Fundado em 2015, o Beleza Online nasceu da paixão por realçar a beleza natural de nossas clientes. 
                Iniciamos como um pequeno estúdio e hoje somos referência em serviços de beleza em nossa região.
              </p>
              <p className="text-gray-600">
                Nossa missão é proporcionar experiências transformadoras, combinando técnicas inovadoras com 
                produtos de alta qualidade para garantir resultados excepcionais para todas as nossas clientes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-salon-pink/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-salon-lilac/20 rounded-full"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Interior do salão Beleza Online" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Nosso Espaço */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-salon-lilac/20 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-salon-pink/20 rounded-full"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Ambiente do salão Beleza Online" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-playfair font-bold mb-4">Nosso Espaço</h2>
              <p className="text-gray-600 mb-4">
                Criamos um ambiente acolhedor, sofisticado e relaxante para que você se sinta especial 
                desde o momento em que entra em nosso salão. Nossa decoração foi pensada para 
                proporcionar conforto e tranquilidade durante sua experiência conosco.
              </p>
              <p className="text-gray-600">
                Contamos com equipamentos modernos e produtos de alta qualidade para garantir 
                os melhores resultados em todos os procedimentos realizados.
              </p>
            </div>
          </div>
          
          {/* Nossa Equipe */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profissional 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                    alt="Ana Silva - Cabeleireira" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">Ana Silva</h3>
                  <p className="text-primary-foreground font-medium mb-3">Cabeleireira</p>
                  <p className="text-gray-600 text-sm">
                    Especialista em cortes, coloração e tratamentos capilares com 8 anos de experiência.
                  </p>
                </div>
              </div>
              
              {/* Profissional 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                    alt="Carla Mendes - Maquiadora" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">Carla Mendes</h3>
                  <p className="text-primary-foreground font-medium mb-3">Maquiadora</p>
                  <p className="text-gray-600 text-sm">
                    Especialista em maquiagem social, artística e para noivas com certificação internacional.
                  </p>
                </div>
              </div>
              
              {/* Profissional 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                    alt="Patrícia Oliveira - Manicure" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">Patrícia Oliveira</h3>
                  <p className="text-primary-foreground font-medium mb-3">Manicure e Pedicure</p>
                  <p className="text-gray-600 text-sm">
                    Especialista em unhas em gel, decoração artística e cuidados completos para mãos e pés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
