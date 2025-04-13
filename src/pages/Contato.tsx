
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
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
              Estamos à disposição para responder suas dúvidas, receber sugestões 
              ou agendar um horário especial para você.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 2222-2222</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@belezaonline.com.br</p>
                    <p className="text-gray-600">agendamento@belezaonline.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Endereço</h3>
                    <p className="text-gray-600">Rua das Flores, 123</p>
                    <p className="text-gray-600">Jardim Primavera - São Paulo/SP</p>
                    <p className="text-gray-600">CEP: 01234-567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 20h</p>
                    <p className="text-gray-600">Sábado: 9h às 18h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md h-64">
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
            </div>
            
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">Envie-nos uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange} 
                    placeholder="Motivo do contato" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem aqui" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                <h3 className="font-medium mb-2">Preferência de contato</h3>
                <p className="text-gray-600 text-sm">
                  Para agendamentos, recomendamos que utilize nosso sistema online de agendamento 
                  ou entre em contato pelo WhatsApp para uma resposta mais rápida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
