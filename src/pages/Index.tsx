
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
  Sparkles, 
  Clock, 
  Award, 
  Star, 
  ChevronRight, 
  CalendarDays, 
  Heart,
  Brush
} from 'lucide-react';

const services = [
  { 
    title: 'Cortes', 
    description: 'Cortes personalizados para valorizar sua beleza', 
    icon: Scissors,
    time: '1h' 
  },
  { 
    title: 'Coloração', 
    description: 'Cores vibrantes e duradouras para seu cabelo', 
    icon: Brush,
    time: '2h' 
  },
  { 
    title: 'Tratamentos', 
    description: 'Hidratação, nutrição e reconstrução capilar', 
    icon: Sparkles,
    time: '1h30' 
  },
];

const testimonials = [
  {
    name: 'Ana Maria',
    rating: 5,
    text: 'Atendimento impecável! Meu cabelo ficou exatamente como eu queria. Voltarei com certeza.',
    service: 'Corte e Coloração'
  },
  {
    name: 'Carla Fernandes',
    rating: 5,
    text: 'A equipe é extremamente profissional e o ambiente é muito aconchegante. Amei o resultado!',
    service: 'Tratamento Capilar'
  },
  {
    name: 'Bruna Santos',
    rating: 5,
    text: 'Minha experiência foi maravilhosa. As meninas são super atenciosas e o resultado ficou perfeito.',
    service: 'Maquiagem para Evento'
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-salon-pink/40 to-salon-lilac/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
                Realce sua beleza com quem entende do assunto
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Nosso salão oferece serviços exclusivos com profissionais especializados para realçar sua beleza natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/agendar">Agende Seu Horário Agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/servicos">Conheça Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-salon-gold/50 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-salon-lilac/50 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Salon environment" 
                  className="rounded-xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Por que nos escolher?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos experiência, produtos de qualidade e atendimento personalizado para oferecer o melhor para você.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-salon-light-pink p-8 rounded-lg text-center">
              <div className="bg-salon-pink h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Profissionais Qualificados</h3>
              <p className="text-gray-600">Nossa equipe é formada por profissionais experientes e constantemente atualizados.</p>
            </div>
            
            <div className="bg-salon-light-lilac p-8 rounded-lg text-center">
              <div className="bg-salon-lilac h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-secondary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Produtos Premium</h3>
              <p className="text-gray-600">Utilizamos apenas produtos de alta qualidade para garantir os melhores resultados.</p>
            </div>
            
            <div className="bg-salon-light-pink p-8 rounded-lg text-center">
              <div className="bg-salon-pink h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Ambiente Acolhedor</h3>
              <p className="text-gray-600">Criamos um espaço confortável e relaxante para sua experiência completa.</p>
            </div>
            
            <div className="bg-salon-light-lilac p-8 rounded-lg text-center">
              <div className="bg-salon-lilac h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="text-secondary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Agendamento Online</h3>
              <p className="text-gray-600">Marque seu horário quando e onde quiser, com nosso sistema prático.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-salon-light-pink/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços para cuidar da sua beleza da cabeça aos pés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-salon-pink/20 rounded-lg">
                    <service.icon className="text-primary-foreground" />
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.time}</span>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/servicos"
                  className="text-primary-foreground font-medium flex items-center hover:underline"
                >
                  <span>Saiba mais</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Antes e Depois</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja a transformação de nossas clientes e inspire-se para sua próxima visita.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Before/After Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative pt-[100%]"> {/* Creates a square aspect ratio */}
                <img 
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Before and after transformation" 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 hover:opacity-75"
                />
                <div className="absolute top-4 left-4 bg-salon-pink text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Coloração
                </div>
              </div>
            </div>
            
            {/* Before/After Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative pt-[100%]">
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Before and after transformation" 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 hover:opacity-75"
                />
                <div className="absolute top-4 left-4 bg-salon-lilac text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Corte
                </div>
              </div>
            </div>
            
            {/* Before/After Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative pt-[100%]">
                <img 
                  src="https://images.unsplash.com/photo-1500840216050-6fca2c77c7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Before and after transformation" 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 hover:opacity-75"
                />
                <div className="absolute top-4 left-4 bg-salon-gold text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Maquiagem
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/galeria">Ver Galeria Completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-salon-light-lilac/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">O que nossas clientes dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A satisfação de nossas clientes é nossa maior recompensa. Confira alguns depoimentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
              <Link to="/depoimentos">Ver Mais Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-lilac">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
            Pronta para realçar sua beleza?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Agende agora mesmo seu horário e venha viver uma experiência única de beleza e bem-estar.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary">
            <Link to="/agendar">Agendar Meu Horário</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
