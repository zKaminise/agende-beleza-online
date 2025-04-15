
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scissors, Paintbrush, HandMetal, Sparkles, Package2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

const Servicos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      id: "cabelo",
      icon: <Scissors className="h-8 w-8" />,
      title: "Cabelo",
      image: "/hair-salon.jpg",
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
      image: "/makeup.jpg",
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
      image: "/nails.jpg",
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
      image: "/facial.jpg",
      services: [
        { name: "Limpeza de Pele", duration: "1h", description: "Limpeza profunda com extração de cravos e impurezas." },
        { name: "Peeling Facial", duration: "45min", description: "Renovação celular para uma pele mais jovem." },
        { name: "Massagem Facial", duration: "30min", description: "Relaxamento e estímulo da circulação." }
      ]
    },
    {
      id: "pacotes",
      icon: <Package2 className="h-8 w-8" />,
      title: "Pacotes Personalizados",
      image: "/packages.jpg",
      services: [
        {
          name: "Monte Seu Pacote",
          duration: "Personalizado",
          description: "Crie um pacote personalizado combinando diferentes serviços com preços especiais.",
          isCustom: true,
          whatsappLink: "https://wa.me/5500000000000?text=Olá! Gostaria de informações sobre pacotes personalizados de serviços."
        }
      ]
    }
  ];

  const filteredCategories = serviceCategories
    .filter(category => 
      !selectedCategory || category.id === selectedCategory
    )
    .map(category => ({
      ...category,
      services: category.services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.services.length > 0);

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

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </Button>
              {serviceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Categorias de Serviços */}
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="bg-primary/30 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-playfair font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <div 
                      key={index} 
                      className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-playfair font-bold">{service.name}</h3>
                        <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      {service.isCustom ? (
                        <Button asChild variant="default" className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                          <a 
                            href={service.whatsappLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Solicitar Orçamento via WhatsApp
                          </a>
                        </Button>
                      ) : (
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/agendar">Agendar este serviço</Link>
                        </Button>
                      )}
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
