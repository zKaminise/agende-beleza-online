
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Phone, Calendar as CalendarIcon, User, Search, LogOut } from "lucide-react";

// Define the booking type for TypeScript
interface Booking {
  service: {
    id: string;
    name: string;
    duration: string;
    price: string;
    category: string;
  };
  professional: {
    id: string;
    name: string;
    photo: string;
    specialty: string;
  };
  date: {
    _type: string;
    value: {
      iso: string;
      value: number;
      local: string;
    }
  };
  time: string;
  userData: {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    isFirstVisit: boolean;
  };
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/admin-login');
      return;
    }

    // Get bookings from localStorage
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      const parsedBookings = JSON.parse(storedBookings) as Booking[];
      setBookings(parsedBookings);
      setFilteredBookings(parsedBookings);
    }
  }, [navigate]);

  // Filter bookings based on search term, selected professional, and date
  useEffect(() => {
    let result = [...bookings];

    // Filter by search term (name, email, or phone)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(booking => 
        booking.userData.name.toLowerCase().includes(term) ||
        booking.userData.email.toLowerCase().includes(term) ||
        booking.userData.phone.includes(term)
      );
    }

    // Filter by selected date
    if (selectedDate) {
      const dateStr = new Date(selectedDate).toISOString().split('T')[0];
      result = result.filter(booking => {
        const bookingDateStr = new Date(booking.date.value.iso).toISOString().split('T')[0];
        return bookingDateStr === dateStr;
      });
    }

    setFilteredBookings(result);
  }, [searchTerm, selectedDate, bookings]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    navigate('/admin-login');
  };

  const openWhatsApp = (phoneNumber: string) => {
    // Format phone number for WhatsApp
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="container py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Painel Administrativo</CardTitle>
            <CardDescription>Gerencie os agendamentos do salão</CardDescription>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Sair
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Search and Filters */}
        <Card className="md:col-span-8">
          <CardHeader>
            <CardTitle>Buscar Agendamentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nome, email ou telefone..." 
                className="pl-10" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Calendar Filter */}
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Filtrar por Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Agendamentos {selectedDate && `- ${selectedDate.toLocaleDateString('pt-BR')}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              {filteredBookings.length === 0 
                ? 'Nenhum agendamento encontrado' 
                : `Total de ${filteredBookings.length} agendamentos`}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Serviço</TableHead>
                <TableHead>Profissional</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Contato</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{booking.userData.name}</span>
                      <span className="text-xs text-muted-foreground">{booking.userData.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{booking.service.name}</span>
                      <span className="text-xs text-muted-foreground">{booking.service.price}</span>
                    </div>
                  </TableCell>
                  <TableCell>{booking.professional.name}</TableCell>
                  <TableCell>{formatDate(booking.date.value.iso)}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => openWhatsApp(booking.userData.phone)}
                    >
                      <Phone size={14} />
                      {booking.userData.phone}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

// Adding the Input component
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default AdminDashboard;
