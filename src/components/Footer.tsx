import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Mail, MessageCircle, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import mercadoPagoLogo from "@/assets/mercado-pago-logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Contato - Livro Acessível",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "95ae894d-58c1-4d23-998c-7161b6c697c3",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Livro Acessível Agora",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso! ✅",
          description: "A Professora Ana responderá em até 24 horas.",
        });
        setFormData({ name: "", email: "", subject: "Contato - Livro Acessível", message: "" });
        setOpen(false);
      } else {
        throw new Error(result.message || "Erro ao enviar");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou envie diretamente para professoraana.cultura@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <footer className="relative py-16 border-t border-primary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo and Mission */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-hero">Livro Acessível</span> Agora
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Democratizando o acesso ao conhecimento através da tecnologia. 
              Um projeto da Professora Ana para transformar vidas através da leitura.
            </p>
          </div>

          {/* Contact and Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-4">
            <div className="backdrop-blur-subtle rounded-xl p-6">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Suporte Técnico</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Atendimento especializado para todos os usuários
              </p>
              <Badge variant="outline" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                24/7 Disponível
              </Badge>
            </div>
            
            <div className="backdrop-blur-subtle rounded-xl p-6">
              <Shield className="w-8 h-8 text-success mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Pagamento Seguro</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Sistema de pagamento com a segurança do Mercado Pago. Transações protegidas e criptografadas.
              </p>
              <Badge variant="outline" className="text-xs">
                🔒 SSL Certificado
              </Badge>
            </div>
            
            <div className="backdrop-blur-subtle rounded-xl p-6">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Contato Direto</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Tire suas dúvidas ou envie sugestões
              </p>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost-glow" size="sm">
                    Enviar Mensagem
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Entre em contato
                    </DialogTitle>
                    <DialogDescription>
                      Envie sua mensagem para a Professora Ana. Resposta em até 24 horas.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="footer-name">Seu nome</Label>
                      <Input id="footer-name" placeholder="Digite seu nome" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footer-email">Seu e-mail</Label>
                      <Input id="footer-email" type="email" placeholder="seu@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footer-subject">Assunto</Label>
                      <Input id="footer-subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footer-message">Sua mensagem</Label>
                      <Textarea id="footer-message" placeholder="Digite sua mensagem aqui..." rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4 space-y-1">
                      <p className="text-sm font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Destinatário:
                      </p>
                      <p className="text-sm text-muted-foreground">professoraana.cultura@gmail.com</p>
                    </div>
                    
                    <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
                      <Mail className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="backdrop-blur-subtle rounded-xl p-6 mb-8">
            <h4 className="font-semibold mb-4 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              Formas de Pagamento Aceitas
            </h4>
            <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              Segurança garantida pelo
              <img src={mercadoPagoLogo} alt="Mercado Pago" className="h-5 inline-block" />
              <span className="font-bold">Mercado Pago</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="text-xs px-3 py-1">
                💳 Visa
              </Badge>
              <Badge variant="outline" className="text-xs px-3 py-1">
                💳 Mastercard
              </Badge>
              <Badge variant="outline" className="text-xs px-3 py-1">
                💳 American Express
              </Badge>
              <Badge variant="outline" className="text-xs px-3 py-1">
                💳 Hipercard
              </Badge>
              <Badge variant="outline" className="text-xs px-3 py-1">
                💳 Elo
              </Badge>
            </div>
          </div>

          {/* Final CTA */}
          <div className="backdrop-blur-modern rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 glow-primary mx-4">
            <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              ⚡ Não perca esta oportunidade única!
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="neon-blink w-full sm:w-auto text-sm sm:text-base font-bold"
              onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}
            >
              ⚡ ACESSO IMEDIATO R$ 19,90 ⚡
            </Button>
          </div>

          {/* Copyright and Credits */}
          <div className="border-t border-primary/20 pt-6">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-primary mr-2" />
              <p className="text-muted-foreground">
                Feito com amor pela Professora Ana
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 Livro Acessível Agora. Todos os direitos reservados.
              <br />
              Democratizando o conhecimento • Transformando vidas através da leitura
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;