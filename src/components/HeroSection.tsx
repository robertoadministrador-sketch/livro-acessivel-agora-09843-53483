import { Button } from "@/components/ui/button";
import { BookOpen, Download, Smartphone, Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import VideoPlayer from "./VideoPlayer";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Livros digitais futurísticos" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full float opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-primary-glow rounded-full pulse-glow opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Video Player */}
        <div className="mb-12 fade-in-up">
          <VideoPlayer videoId="Bjv2Iod-jg0" platform="youtube" title="Vídeo de Apresentação" description="Conheça a missão da Professora Ana" />
        </div>

        {/* Hero Text */}
        <div className="mb-12 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-hero">Livro Acessível</span>
            <br />
            <span className="text-foreground">Agora</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Democratizando o acesso ao conhecimento através do maior acervo digital de 
            <span className="text-primary font-semibold"> e-books best sellers</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Milhares de livros em todas as áreas: medicina, engenharia, negócios, didáticos e muito mais.</p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto fade-in-up">
          <div className="backdrop-blur-subtle rounded-xl p-6 hover-lift transition-smooth">
            <BookOpen className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Acervo Completo</h3>
            <p className="text-muted-foreground text-sm">Milhares de best sellers em todas as especialidades</p>
          </div>
          
          <div className="backdrop-blur-subtle rounded-xl p-6 hover-lift transition-smooth">
            <Download className="w-12 h-12 text-secondary mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Múltiplos Formatos</h3>
            <p className="text-muted-foreground text-sm">Kindle, ePub, PDF - compatível com todos os dispositivos</p>
          </div>
          
          <div className="backdrop-blur-subtle rounded-xl p-6 hover-lift transition-smooth">
            <Smartphone className="w-12 h-12 text-gold mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">App de Leitura</h3>
            <p className="text-muted-foreground text-sm">Incluso app mobile + opção de audiobook</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="backdrop-blur-modern rounded-2xl p-8 max-w-2xl mx-auto glow-strong fade-in-up">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-gold fill-current" />)}
            <span className="ml-2 text-gold font-semibold">Acesso Vitalício</span>
          </div>
          
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-muted-foreground line-through text-2xl mr-2">R$ 297</span>
              <span className="text-success">R$ 19,90</span>
            </p>
            <p className="text-muted-foreground">Taxa única • Sem renovação • Sem mensalidade</p>
          </div>
          
          <Button variant="cta" size="xl" className="w-full mb-4 pulse-glow" onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}>
            🚀 GARANTIR ACESSO VITALÍCIO AGORA
          </Button>
          
          <p className="text-sm text-muted-foreground">
            ✅ Acesso imediato após o pagamento<br />
            ✅ Todos os e-books + app de leitura grátis<br />
            ✅ Suporte técnico vitalício
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col items-center gap-2 animate-bounce z-30 px-0">
        
        
      </div>
    </section>;
};
export default HeroSection;