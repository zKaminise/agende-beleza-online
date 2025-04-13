
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Scissors, Paintbrush, HandMetal, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      id: "cabelo",
      icon: <Scissors className="h-8 w-8" />,
      title: "Cabelo",
      services: [
        { name: "Corte Feminino", duration: "1h", description: "Corte personalizado de acordo com seu tipo de rosto e estilo." },
        { name: "Coloração", duration: "2h", description: "Tintura profissional com produtos de alta qualidade." },
        { name: "Hidratação", duration: "1h", description: "Tratamento intensivo para recuperar cabelos danificados." },
        { name: "Escova", duration: "45min", description: "Modelagem com secador para um acabamento perfeito." }
      ]
    },
    {
      id: "maquiagem",
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Maquiagem",
      services: [
        { name: "Maquiagem Social", duration: "1h", description: "Make para eventos e ocasiões especiais." },
        { name: "Maquiagem para Noivas", duration: "1h30", description: "Make especial para o dia mais importante." },
        { name: "Design de Sobrancelhas", duration: "30min", description: "Modelagem completa com henna opcional." }
      ]
    },
    {
      id: "unhas",
      icon: <HandMetal className="h-8 w-8" />,
      title: "Unhas",
      services: [
        { name: "Manicure", duration: "45min", description: "Tratamento completo das unhas das mãos." },
        { name: "Pedicure", duration: "1h", description: "Cuidado especial para os pés e unhas." },
        { name: "Unhas em Gel", duration: "1h30", description: "Aplicação de unhas em gel com maior durabilidade." },
        { name: "Nail Art", duration: "15-30min", description: "Decoração artística para suas unhas." }
      ]
    },
    {
      id: "estetica",
      icon: <Sparkles className="h-8 w-8" />,
      title: "Estética Facial",
      services: [
        { name: "Limpeza de Pele", duration: "1h", description: "Limpeza profunda com extração de cravos e impurezas." },
        { name: "Peeling Facial", duration: "45min", description: "Renovação celular para uma pele mais jovem." },
        { name: "Massagem Facial", duration: "30min", description: "Relaxamento e estímulo da circulação." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Nossos Serviços
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça todos os serviços que oferecemos para realçar sua beleza natural.
              Cada procedimento é realizado com produtos de alta qualidade e por profissionais especializados.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* Categorias de Serviços */}
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="bg-primary/30 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-playfair font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <div 
                      key={index} 
                      className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-playfair font-bold">{service.name}</h3>
                        <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/agendar">Agendar este serviço</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-salon-pink/30 to-salon-lilac/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Pronta para realçar sua beleza?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Agende agora mesmo um horário e venha conhecer o melhor salão da cidade.
              Nossos profissionais estão ansiosos para transformar o seu visual!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/agendar">Agendar um Horário</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Servicos;
