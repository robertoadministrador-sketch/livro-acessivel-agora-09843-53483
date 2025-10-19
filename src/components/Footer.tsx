import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Mail, MessageCircle, Shield, Clock } from "lucide-react";
import mercadoPagoLogo from "@/assets/mercado-pago-logo.png";

const Footer = () => {
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
              <Button variant="ghost-glow" size="sm">
                Enviar Mensagem
              </Button>
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