
import { useEffect } from "react";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estamos à disposição para atendê-la e proporcionar a melhor experiência em beleza e bem-estar.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 2222-2222</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">E-mail</h3>
                    <p className="text-gray-600">contato@belezaonline.com.br</p>
                    <p className="text-gray-600">agendamento@belezaonline.com.br</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Endereço</h3>
                    <p className="text-gray-600">Rua das Flores, 123</p>
                    <p className="text-gray-600">Jardim Primavera - São Paulo/SP</p>
                    <p className="text-gray-600">CEP: 01234-567</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 20h</p>
                    <p className="text-gray-600">Sábado: 9h às 18h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117008.55082488365!2d-46.86646367109377!3d-23.566540499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xad63e8e7c2e99d16!2sShopping%20Cidade%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1711073278584!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Salão"
              />
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-salon-pink/20 to-salon-lilac/20 rounded-xl p-8">
              <h2 className="text-2xl font-playfair font-bold mb-4">
                Pronta para agendar seu horário?
              </h2>
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo e converse diretamente conosco pelo WhatsApp.
              </p>
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Agendar via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
