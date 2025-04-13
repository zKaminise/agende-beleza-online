
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-salon-light-lilac pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-playfair font-bold text-primary">Beleza</span>
              <span className="text-2xl font-playfair font-bold text-secondary">Online</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Realce sua beleza natural com profissionais especializados e os melhores produtos do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-600 hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/galeria" className="text-gray-600 hover:text-primary transition-colors">Galeria</Link></li>
              <li><Link to="/depoimentos" className="text-gray-600 hover:text-primary transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Cabelo</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Unhas</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Maquiagem</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Tratamentos Faciais</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Depilação</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-600">Av. Paulista, 1000<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-600">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-600">contato@belezaonline.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-salon-lilac/30 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BelezaOnline. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
