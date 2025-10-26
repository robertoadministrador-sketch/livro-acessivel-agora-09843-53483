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
        {/* Top CTA Button - Mobile Optimized */}
        <div className="mb-6 sm:mb-8 fade-in-up">
          <Button 
            variant="cta" 
            size="xl" 
            className="neon-blink font-bold text-base sm:text-lg md:text-xl px-6 py-6 sm:py-7 w-full sm:w-auto"
            onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}
          >
            ⚡ ACESSO IMEDIATO ⚡
          </Button>
        </div>

        {/* Video Player */}
        <div className="mb-12 fade-in-up">
          <VideoPlayer videoId="Bjv2Iod-jg0" platform="youtube" title="Vídeo de Apresentação" description="Conheça a missão da Professora Ana" />
        </div>

        {/* Hero Text */}
        <div className="mb-8 sm:mb-12 fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-hero">Livro Acessível</span>
            <br />
            <span className="text-foreground">Agora</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-4">
            Democratizando o acesso ao conhecimento através do maior acervo digital de 
            <span className="text-primary font-semibold"> e-books best sellers</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">Milhares de livros em todas as áreas: medicina, engenharia, negócios, didáticos e muito mais.</p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto fade-in-up px-4">
          <div className="backdrop-blur-subtle rounded-xl p-4 sm:p-6 hover-lift transition-smooth">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4 mx-auto" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">Acervo Completo</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Milhares de best sellers em todas as especialidades</p>
          </div>
          
          <div className="backdrop-blur-subtle rounded-xl p-4 sm:p-6 hover-lift transition-smooth">
            <Download className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-3 sm:mb-4 mx-auto" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">Múltiplos Formatos</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Kindle, ePub, PDF - compatível com todos os dispositivos</p>
          </div>
          
          <div className="backdrop-blur-subtle rounded-xl p-4 sm:p-6 hover-lift transition-smooth sm:col-span-2 md:col-span-1">
            <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4 mx-auto" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">App de Leitura</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Incluso app mobile + opção de audiobook</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="backdrop-blur-modern rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto glow-strong fade-in-up">
          <div className="flex flex-wrap items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gold fill-current" />)}
            <span className="ml-2 text-gold font-semibold text-sm sm:text-base">Acesso Vitalício</span>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              <span className="text-muted-foreground line-through text-lg sm:text-xl md:text-2xl mr-2">R$ 297</span>
              <span className="text-success">R$ 19,90</span>
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Taxa única • Sem renovação • Sem mensalidade</p>
          </div>
          
          <Button variant="cta" size="xl" className="w-full mb-3 sm:mb-4 pulse-glow text-sm sm:text-base md:text-lg px-4 py-5 sm:py-6" onClick={() => window.open("https://mpago.la/23pzQfU", "_blank", "noopener,noreferrer")}>
            🚀 GARANTIR ACESSO VITALÍCIO AGORA
          </Button>
          
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            ✅ Acesso imediato após o pagamento<br />
            ✅ Todos os e-books + app de leitura grátis<br />
            ✅ Suporte técnico vitalício
          </p>
        </div>
      </div>

    </section>;
};
export default HeroSection;