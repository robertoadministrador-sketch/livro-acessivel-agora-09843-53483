import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Crown, Gift, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import professoraAnaImage from "@/assets/professora-ana.png";
const FinalCTASection = () => {
  const guarantees = ["Acesso 100% vitalício garantido", "Suporte técnico especializado", "Atualizações constantes do acervo", "Compatibilidade com todos os dispositivos"];
  const bonuses = [{
    icon: Gift,
    title: "App de Leitura por Voz",
    description: "Interface otimizada + modo audiobook",
    value: "R$ 0,00"
  }, {
    icon: Crown,
    title: "Acesso à Comunidade VIP",
    description: "Grupo exclusivo de leitores",
    value: "R$ 0,00"
  }, {
    icon: Sparkles,
    title: "Guias de Estudo",
    description: "Material complementar para acadêmicos",
    value: "R$ 0,00"
  }];
  return <section className="py-20 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pulse-glow"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/30 rounded-full blur-lg animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Final Offer Header */}
        <div className="text-center mb-8 sm:mb-12 fade-in-up px-4">
          <Badge variant="secondary" className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-1.5 sm:py-2 pulse-glow">
            🎯 Última Chance
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-hero">Transforme sua vida</span>
            <br />
            <span className="text-foreground">através do conhecimento</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esta é sua oportunidade única de ter acesso vitalício ao maior acervo 
            de livros digitais do Brasil por menos que o preço de um único livro físico.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto mb-12 fade-in-up">
          <Card className="backdrop-blur-modern p-8 md:p-12 glow-strong border-primary/30">
            <div className="text-center mb-8">
              <Zap className="w-16 h-16 text-warning mx-auto mb-4 pulse-glow" />
              <h3 className="text-3xl font-bold mb-4">Valor Total do Pacote:</h3>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">
                  🎯 Acesso vitalício ao acervo: <span className="line-through">R$ 997</span>
                </p>
                {bonuses.map((bonus, index) => (
                  <p key={index} className="text-lg text-muted-foreground">
                    🎁 {bonus.title}: <span className="line-through">{bonus.value}</span>
                  </p>
                ))}
                <div className="border-t border-primary/20 pt-4 mt-6">
                  <p className="text-2xl font-bold text-muted-foreground">
                    Total: <span className="line-through">R$ 997,00</span>
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-success mt-2">
                    HOJE: R$ 19,90
                  </p>
                  <Badge variant="destructive" className="mt-2">
                    98% de desconto - Somente hoje!
                  </Badge>
                </div>
              </div>
            </div>

            {/* Bonuses Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {bonuses.map((bonus, index) => <div key={index} className="backdrop-blur-subtle rounded-xl p-6 text-center hover-lift transition-smooth">
                  <bonus.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{bonus.description}</p>
                  <Badge variant="outline" className="text-xs">
                    Valor: {bonus.value}
                  </Badge>
                </div>)}
            </div>

            {/* Guarantees */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {guarantees.map((guarantee, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{guarantee}</span>
                </div>)}
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full mb-3 sm:mb-4 pulse-glow text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 md:px-16 py-5 sm:py-6"
                onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                <span className="inline sm:hidden">TRANSFORMAR MINHA VIDA</span>
                <span className="hidden sm:inline">QUERO TRANSFORMAR MINHA VIDA AGORA</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 leading-relaxed">
                🔒 <strong>100% seguro</strong> • ⚡ <strong>Acesso imediato</strong> • 
                💎 <strong>Vitalício</strong> • 📱 <strong>Todos os dispositivos</strong>
              </p>
            </div>
          </Card>
        </div>

        {/* About the Creator */}
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <Card className="backdrop-blur-subtle p-8">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl hover-lift transition-smooth">
                <img 
                  src={professoraAnaImage} 
                  alt="Professora Ana - Idealizadora do Projeto" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">Professora Ana</h4>
              <p className="text-muted-foreground mb-4">
                Idealizadora do Projeto
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Formada em <strong>Administração, Letras e Antropologia</strong>, 
              a Professora Ana dedicou sua carreira à democratização do conhecimento. 
              Este projeto é o resultado de anos de trabalho para tornar a educação 
              de qualidade acessível a todos, quebrando barreiras financeiras e sociais.
            </p>
            
            <p className="text-primary font-semibold">
              "Acredito que o conhecimento deve ser um direito, não um privilégio."
            </p>
          </Card>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;