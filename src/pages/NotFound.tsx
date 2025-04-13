
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center py-20 bg-salon-light-pink/30">
        <div className="text-center px-4">
          <h1 className="text-6xl font-playfair font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! Não conseguimos encontrar a página que você está procurando.
          </p>
          <div className="relative">
            <div className="absolute -top-5 -left-16 md:-left-24 w-16 h-16 bg-salon-lilac/30 rounded-full"></div>
            <div className="absolute -bottom-5 -right-16 md:-right-24 w-16 h-16 bg-salon-pink/30 rounded-full"></div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground relative z-10">
              <Link to="/">Voltar para a Página Inicial</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
