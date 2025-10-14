import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Quote, CheckCircle, Clock, Users, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TestimonialsSection = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Acervo de E-books",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o link mailto com os dados do formulário
    const mailtoLink = `mailto:professoraana.cultura@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Abrindo seu cliente de email",
      description: "Sua mensagem está pronta para ser enviada.",
    });
    
    setOpen(false);
  };

  const stats = [
    { number: "50k+", label: "Livros Disponíveis", icon: "📚" },
    { number: "10k+", label: "Usuários Ativos", icon: "👥" },
    { number: "98%", label: "Satisfação", icon: "⭐" },
    { number: "24/7", label: "Suporte", icon: "🕒" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Estudante de Medicina",
      content: "Encontrei todos os livros que precisava para a residência. Economizei mais de R$ 2.000 em material de estudo!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Engenheiro Civil",
      content: "O acervo técnico é impressionante. Tenho acesso aos melhores manuais e livros de engenharia por uma fração do preço.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Empreendedora",
      content: "Os livros de negócios disponíveis aqui transformaram minha empresa. Conhecimento de qualidade que realmente funciona.",
      rating: 5
    }
  ];

  const urgencyFactors = [
    "Preço promocional por tempo limitado",
    "Mais de 1.000 novos títulos adicionados mensalmente",
    "E-books de alta qualidade visual",
    "Acesso imediato após o pagamento"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            📊 Números que Impressionam
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Milhares já confiam em nós
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 text-center backdrop-blur-subtle hover-lift transition-smooth border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos usuários dizem
            </h3>
            <p className="text-xl text-muted-foreground">
              Transformando vidas através do conhecimento acessível
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 backdrop-blur-modern hover-lift transition-smooth border-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div className="backdrop-blur-modern rounded-2xl p-8 md:p-12 glow-strong fade-in-up text-center">
          <Clock className="w-16 h-16 text-warning mx-auto mb-6 pulse-glow" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ⚡ Oferta Especial de Lançamento
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aproveite esta oportunidade de obter acesso vitalício ao maior acervo digital do país, mediante uma taxa simbólica destinada à manutenção do site e ao incentivo à difusão do conhecimento.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {urgencyFactors.map((factor, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 backdrop-blur-subtle rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{factor}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl" 
              className="pulse-glow"
              onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}
            >
              🚀 GARANTIR ACESSO AGORA - R$ 19,90
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost-glow" size="lg">
                  💬 Tenho uma dúvida
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Entre em contato
                  </DialogTitle>
                  <DialogDescription>
                    Envie sua dúvida para a Professora Ana. Resposta em até 24 horas.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Seu nome</Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Seu e-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Sua mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Digite sua dúvida aqui..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 space-y-1">
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Destinatário:
                    </p>
                    <p className="text-sm text-muted-foreground">professoraana.cultura@gmail.com</p>
                  </div>
                  
                  <Button type="submit" variant="cta" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            ⏰ Esta oferta pode encerrar a qualquer momento<br />
            🔒 Pagamento 100% seguro e acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;