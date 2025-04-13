
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";

const Galeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const beforeAfterImages = [
    {
      id: 1,
      category: "Cabelo",
      title: "Transformação loira",
      before: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1562104938-9c0577c76efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Transformação completa de morena para loira com tratamento de reconstrução para manter a saúde dos fios."
    },
    {
      id: 2,
      category: "Cabelo",
      title: "Corte moderno",
      before: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Corte moderno que valoriza o formato do rosto e facilita a manutenção diária."
    },
    {
      id: 3,
      category: "Maquiagem",
      title: "Maquiagem para eventos",
      before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1586035758264-c5e28e4bae76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Maquiagem sofisticada para eventos noturnos, com destaque para os olhos."
    },
    {
      id: 4,
      category: "Unhas",
      title: "Nail art francesa",
      before: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1636018124500-5c2d2a771c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Francesa moderna com acabamento em gel para maior durabilidade."
    },
    {
      id: 5,
      category: "Estética",
      title: "Limpeza de pele",
      before: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1588979355313-6711a095465f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Tratamento completo para pele oleosa com extração de cravos e máscara purificante."
    },
    {
      id: 6,
      category: "Cabelo",
      title: "Coloração ruiva",
      before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1596875244376-8b7b38ffd84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Coloração ruiva vibrante com tratamento de nutrição para manter a cor por mais tempo."
    }
  ];

  const categories = ['Todos', ...new Set(beforeAfterImages.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? beforeAfterImages 
    : beforeAfterImages.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Antes e Depois
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça algumas das transformações que já realizamos. 
              Cada trabalho é único e personalizado para valorizar a beleza natural de cada cliente.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* Filtros de categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Grid de imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden">
                  {/* Antes e Depois */}
                  <div className="flex h-64">
                    <div className="w-1/2 overflow-hidden relative">
                      <span className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs px-2 py-1 rounded z-10">Antes</span>
                      <img src={item.before} alt={`Antes - ${item.title}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 overflow-hidden relative">
                      <span className="absolute top-2 right-2 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded z-10">Depois</span>
                      <img src={item.after} alt={`Depois - ${item.title}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <h3 className="text-xl font-playfair font-bold mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                  <Button 
                    variant="link" 
                    className="text-primary-foreground p-0 mt-2"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal de detalhes */}
          <Sheet open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <SheetContent className="sm:max-w-xl w-full">
              {selectedImage !== null && (
                <>
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-playfair">
                      {beforeAfterImages.find(item => item.id === selectedImage)?.title}
                    </SheetTitle>
                    <SheetDescription>
                      {beforeAfterImages.find(item => item.id === selectedImage)?.category}
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-2">Antes</p>
                        <div className="rounded-md overflow-hidden">
                          <img 
                            src={beforeAfterImages.find(item => item.id === selectedImage)?.before} 
                            alt="Antes" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-2">Depois</p>
                        <div className="rounded-md overflow-hidden">
                          <img 
                            src={beforeAfterImages.find(item => item.id === selectedImage)?.after} 
                            alt="Depois" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-lg font-medium mb-2">Descrição</h4>
                      <p className="text-gray-600">
                        {beforeAfterImages.find(item => item.id === selectedImage)?.description}
                      </p>
                    </div>
                    
                    <Button className="w-full mt-6" onClick={() => window.location.href="/agendar"}>
                      Quero uma transformação assim
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Galeria;
