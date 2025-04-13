
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Início', path: '/' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Serviços', path: '/servicos' },
    { title: 'Antes e Depois', path: '/galeria' },
    { title: 'Depoimentos', path: '/depoimentos' },
    { title: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="w-full bg-white/95 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-primary">Beleza</span>
          <span className="text-2xl font-playfair font-bold text-secondary">Online</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/agendar">Agendar Agora</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 hover:text-primary transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block py-3 text-gray-600 hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="w-full my-3 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/agendar" onClick={toggleMenu}>Agendar Agora</Link>
            </Button>
          </div>
        </div>
      )}
      
      {/* WhatsApp button */}
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition-transform hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <Phone size={24} />
      </a>
    </nav>
  );
};

export default Navigation;
