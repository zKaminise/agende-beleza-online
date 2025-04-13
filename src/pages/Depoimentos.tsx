
import { useEffect } from "react";
import { Star, Quote, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Depoimentos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Marina Santos",
      service: "Corte e Coloração",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      date: "15/03/2023",
      text: "Adorei o resultado da minha transformação! A Ana é uma profissional incrível que entendeu exatamente o que eu queria. O ambiente do salão é super aconchegante e o atendimento foi impecável. Já marquei meu retorno para o próximo mês!"
    },
    {
      id: 2,
      name: "Juliana Costa",
      service: "Manicure e Pedicure",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 5,
      date: "02/04/2023",
      text: "A Patrícia fez um trabalho incrível nas minhas unhas! O acabamento é perfeito e já dura duas semanas sem nenhum problema. O salão é muito limpo e organizado, me senti muito à vontade. Recomendo a todas as amigas!"
    },
    {
      id: 3,
      name: "Fernanda Almeida",
      service: "Maquiagem para Casamento",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
      date: "20/05/2023",
      text: "A Carla fez minha maquiagem para o dia do meu casamento e foi simplesmente perfeita! Durou a cerimônia e festa inteira, mesmo com todo o calor e emoção do momento. Recebi muitos elogios e me senti linda. Obrigada por fazer parte desse momento tão especial!"
    },
    {
      id: 4,
      name: "Carolina Mendes",
      service: "Hidratação Capilar",
      photo: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 4,
      date: "07/06/2023",
      text: "Meu cabelo estava muito ressecado e danificado, mas após o tratamento de hidratação ficou incrível! Macio, brilhante e muito mais saudável. O resultado superou minhas expectativas. A equipe é muito atenciosa e o preço justo pelo serviço de qualidade."
    },
    {
      id: 5,
      name: "Amanda Silveira",
      service: "Design de Sobrancelhas",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      rating: 5,
      date: "12/07/2023",
      text: "O design de sobrancelhas com henna transformou meu rosto! A profissional foi super cuidadosa e respeitou o formato natural das minhas sobrancelhas. O resultado ficou natural e valorizou muito meus olhos. Recomendo demais!"
    },
    {
      id: 6,
      name: "Paula Martins",
      service: "Corte e Escova",
      photo: "https://images.unsplash.com/photo-1589671927288-a2040712f950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
      rating: 5,
      date: "28/07/2023",
      text: "Estava precisando mudar o visual e a Ana acertou em cheio no corte que sugeriu para mim! A escova ficou perfeita e durou vários dias. O ambiente é super agradável e o café que servem é delicioso. Com certeza voltarei!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Depoimentos
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Veja o que nossas clientes estão dizendo sobre os serviços do Beleza Online.
              Valorizamos cada experiência e feedback para continuarmos melhorando.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">98%</p>
              <p className="text-gray-600 mt-2">Satisfação</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-gray-600 mt-2">Clientes felizes</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">4.9</p>
              <p className="text-gray-600 mt-2">Avaliação média</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">85%</p>
              <p className="text-gray-600 mt-2">Retorno de clientes</p>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-primary-foreground text-sm">{testimonial.service}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/30 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 pl-4">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center text-gray-500 text-xs mt-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-salon-lilac/30 to-salon-pink/30 rounded-xl p-8 md:p-12 text-center mt-8">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Venha ter uma experiência incrível
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se às nossas clientes satisfeitas e experimente os serviços do Beleza Online.
              Estamos prontos para superar suas expectativas!
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

export default Depoimentos;
