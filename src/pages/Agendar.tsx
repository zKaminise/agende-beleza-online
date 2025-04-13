
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, Check, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Service = {
  id: string;
  name: string;
  duration: string;
  price: string;
  category: string;
};

type Professional = {
  id: string;
  name: string;
  photo: string;
  specialty: string;
};

const Agendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form data
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    isFirstVisit: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample data
  const services: Service[] = [
    { id: "corte", name: "Corte Feminino", duration: "1h", price: "R$ 80,00", category: "Cabelo" },
    { id: "coloracao", name: "Coloração", duration: "2h", price: "R$ 150,00", category: "Cabelo" },
    { id: "hidratacao", name: "Hidratação", duration: "1h", price: "R$ 70,00", category: "Cabelo" },
    { id: "manicure", name: "Manicure", duration: "45min", price: "R$ 50,00", category: "Unhas" },
    { id: "pedicure", name: "Pedicure", duration: "1h", price: "R$ 60,00", category: "Unhas" },
    { id: "maquiagem", name: "Maquiagem Social", duration: "1h", price: "R$ 120,00", category: "Maquiagem" },
    { id: "sobrancelha", name: "Design de Sobrancelhas", duration: "30min", price: "R$ 40,00", category: "Estética" },
    { id: "limpeza", name: "Limpeza de Pele", duration: "1h", price: "R$ 90,00", category: "Estética" }
  ];
  
  const professionals: Professional[] = [
    { id: "ana", name: "Ana Silva", photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", specialty: "Cabeleireira" },
    { id: "carla", name: "Carla Mendes", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80", specialty: "Maquiadora" },
    { id: "patricia", name: "Patrícia Oliveira", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specialty: "Manicure" }
  ];
  
  // Available time slots (this would typically come from an API based on date and professional)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  
  // Generate available time slots for the selected date
  useEffect(() => {
    if (selectedDate) {
      // Simulate API call to get available slots
      const isWeekend = [0, 6].includes(selectedDate.getDay());
      
      // Different hours for weekends and weekdays
      const startHour = isWeekend ? 9 : 8;
      const endHour = isWeekend ? 18 : 20;
      
      // Generate time slots in 30-minute increments
      const slots: string[] = [];
      for (let hour = startHour; hour < endHour; hour++) {
        slots.push(`${hour}:00`);
        slots.push(`${hour}:30`);
      }
      
      // Simulate some slots being already booked
      const randomlyRemoveSlots = () => {
        // Remove approximately 40% of the slots randomly to simulate bookings
        return slots.filter(() => Math.random() > 0.4);
      };
      
      // Set available slots after a short delay to simulate API call
      setTimeout(() => {
        setAvailableTimeSlots(randomlyRemoveSlots());
      }, 500);
    }
  }, [selectedDate, selectedProfessional]);

  // Handle form inputs
  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Next step
  const handleNextStep = () => {
    if (currentStep === 1 && !selectedService) {
      toast.error("Por favor, selecione um serviço para continuar.");
      return;
    }
    
    if (currentStep === 2 && !selectedProfessional) {
      toast.error("Por favor, selecione um profissional para continuar.");
      return;
    }
    
    if (currentStep === 3 && (!selectedDate || !selectedTime)) {
      toast.error("Por favor, selecione data e horário para continuar.");
      return;
    }
    
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Previous step
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate data
    if (!userData.name || !userData.email || !userData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      // Log booking information
      console.log("Booking Information:", {
        service: services.find(s => s.id === selectedService),
        professional: professionals.find(p => p.id === selectedProfessional),
        date: selectedDate,
        time: selectedTime,
        userData
      });
      
      // Show success message
      toast.success("Agendamento realizado com sucesso! Você receberá uma confirmação por e-mail em breve.");
      
      // Reset form and go to step 1
      setSelectedService(null);
      setSelectedProfessional(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
      setUserData({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        isFirstVisit: false
      });
      setCurrentStep(1);
      setIsSubmitting(false);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  // Selected service details
  const selectedServiceDetails = selectedService 
    ? services.find(service => service.id === selectedService) 
    : null;
  
  // Selected professional details
  const selectedProfessionalDetails = selectedProfessional 
    ? professionals.find(prof => prof.id === selectedProfessional) 
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Agende seu Horário
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Faça seu agendamento online de forma rápida e prática.
              Escolha o serviço, profissional e horário de sua preferência.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* Progress steps */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-between">
              {["Serviço", "Profissional", "Data e Hora", "Seus Dados"].map((step, index) => {
                const stepNum = index + 1;
                const isActive = currentStep === stepNum;
                const isCompleted = currentStep > stepNum;
                
                return (
                  <div key={step} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                        ${isActive || isCompleted ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-500'}
                      `}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
                    </div>
                    <p className={`text-sm mt-2 ${isActive ? 'text-primary-foreground font-medium' : 'text-gray-500'}`}>
                      {step}
                    </p>
                    
                    {index < 3 && (
                      <div className={`hidden sm:block h-1 w-full ${isCompleted ? 'bg-primary' : 'bg-gray-200'} absolute`} />
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="relative flex justify-between mt-2">
              <div className={`h-1 absolute top-1/2 transform -translate-y-1/2 left-0 ${currentStep > 1 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: '33%' }} />
              <div className={`h-1 absolute top-1/2 transform -translate-y-1/2 left-1/3 ${currentStep > 2 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: '33%' }} />
              <div className={`h-1 absolute top-1/2 transform -translate-y-1/2 left-2/3 ${currentStep > 3 ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: '33%' }} />
            </div>
          </div>
          
          {/* Booking form */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-playfair font-bold mb-6">Escolha um Serviço</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        className={`
                          p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                          ${selectedService === service.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-gray-200 hover:border-primary/50'}
                        `}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{service.name}</h3>
                            <p className="text-sm text-gray-500">{service.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-primary-foreground font-bold">{service.price}</p>
                            <p className="text-xs text-gray-500">{service.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 2: Professional Selection */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-playfair font-bold mb-6">Escolha um Profissional</h2>
                  
                  <div className="flex items-center p-4 bg-secondary/10 rounded-lg mb-6">
                    <div className="mr-3 text-secondary/80">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Serviço selecionado:</p>
                      <p>{selectedServiceDetails?.name} - {selectedServiceDetails?.price} ({selectedServiceDetails?.duration})</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {professionals.map((professional) => (
                      <div 
                        key={professional.id}
                        className={`
                          p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                          ${selectedProfessional === professional.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-gray-200 hover:border-primary/50'}
                        `}
                        onClick={() => setSelectedProfessional(professional.id)}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                            <img 
                              src={professional.photo} 
                              alt={professional.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-medium text-lg">{professional.name}</h3>
                          <p className="text-sm text-gray-500">{professional.specialty}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Any Professional Option */}
                    <div 
                      className={`
                        p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${selectedProfessional === 'any' 
                          ? 'border-primary bg-primary/10' 
                          : 'border-gray-200 hover:border-primary/50'}
                      `}
                      onClick={() => setSelectedProfessional('any')}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                          <User className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="font-medium text-lg">Qualquer Profissional</h3>
                        <p className="text-sm text-gray-500">Sem preferência específica</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Date and Time Selection */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-playfair font-bold mb-6">Escolha Data e Horário</h2>
                  
                  <div className="flex items-center p-4 bg-secondary/10 rounded-lg mb-6">
                    <div className="mr-3 text-secondary/80">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Serviço e profissional selecionados:</p>
                      <p>
                        {selectedServiceDetails?.name} com {
                          selectedProfessional === 'any' 
                            ? 'qualquer profissional disponível' 
                            : selectedProfessionalDetails?.name
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecione uma data
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? (
                              format(selectedDate, "PPP", { locale: pt })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable past dates
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                            locale={pt}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Time slots */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecione um horário
                      </label>
                      
                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2">
                          {availableTimeSlots.length > 0 ? (
                            availableTimeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                className={selectedTime === time ? "bg-primary" : ""}
                                onClick={() => setSelectedTime(time)}
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                              </Button>
                            ))
                          ) : (
                            <div className="col-span-3 flex items-center justify-center h-40 border rounded-lg text-gray-500">
                              <div className="text-center">
                                <svg className="animate-spin h-6 w-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p>Carregando horários disponíveis...</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-40 border rounded-lg text-gray-500">
                          <p>Selecione uma data para ver os horários disponíveis</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 4: User Data */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-playfair font-bold mb-6">Complete seus Dados</h2>
                  
                  <div className="flex items-center p-4 bg-secondary/10 rounded-lg mb-6">
                    <div className="mr-3 text-secondary/80">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Agendamento selecionado:</p>
                      <p>
                        {selectedServiceDetails?.name} com {
                          selectedProfessional === 'any' 
                            ? 'qualquer profissional disponível' 
                            : selectedProfessionalDetails?.name
                        } em {selectedDate && format(selectedDate, "PPP", { locale: pt })} às {selectedTime}
                      </p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo*</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={userData.name}
                        onChange={handleUserDataChange}
                        placeholder="Seu nome completo" 
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail*</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={userData.email}
                          onChange={handleUserDataChange}
                          placeholder="seu.email@exemplo.com" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone/WhatsApp*</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={userData.phone}
                          onChange={handleUserDataChange}
                          placeholder="(00) 00000-0000" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF (opcional)</Label>
                      <Input 
                        id="cpf" 
                        name="cpf"
                        value={userData.cpf}
                        onChange={handleUserDataChange}
                        placeholder="000.000.000-00" 
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox 
                        id="isFirstVisit" 
                        name="isFirstVisit"
                        checked={userData.isFirstVisit}
                        onCheckedChange={(checked) => 
                          setUserData(prev => ({ ...prev, isFirstVisit: checked === true }))
                        }
                      />
                      <label
                        htmlFor="isFirstVisit"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Esta é minha primeira visita ao salão
                      </label>
                    </div>
                    
                    <div className="p-4 bg-primary/10 rounded-lg mt-6">
                      <h3 className="font-medium mb-2">Políticas de Cancelamento</h3>
                      <p className="text-gray-600 text-sm">
                        Você pode reagendar ou cancelar seu agendamento com até 24 horas de antecedência 
                        sem nenhuma taxa. Cancelamentos com menos de 24 horas de antecedência poderão 
                        ser cobrados uma taxa de 30% do valor do serviço.
                      </p>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={handlePreviousStep}
                  disabled={currentStep === 1}
                >
                  Voltar
                </Button>
                
                {currentStep < 4 ? (
                  <Button onClick={handleNextStep}>
                    Continuar
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Confirmando...
                      </span>
                    ) : (
                      "Confirmar Agendamento"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agendar;
