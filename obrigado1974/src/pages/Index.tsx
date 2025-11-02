import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Gift, Mail, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header Success Message */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Sua compra foi confirmada!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agradecemos por fazer parte da <span className="font-semibold text-foreground">Democratização da Leitura</span>.
          </p>
        </div>

        {/* Save Address Notice */}
        <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          <p className="text-center text-lg font-medium text-foreground">
            📌 Salve este endereço no seu computador ou celular para fácil acesso.
          </p>
        </Card>

        {/* Main Access Section */}
        <Card className="p-8 mb-8 shadow-xl animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Link para acesso imediato ao acervo de livros
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Para ler ou baixar seus e-books:
          </p>

          <Button 
            variant="cta"
            size="lg"
            className="w-full mb-6"
            onClick={() => window.open('https://pt.z-lib.fm/', '_blank')}
          >
            <BookOpen className="w-5 h-5" />
            ACESSAR MEU ACERVO DE E-BOOKS
          </Button>

          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <p className="font-semibold text-foreground mb-4">📝 Instruções de acesso:</p>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Clique em <strong>entrar</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Selecione <strong>criar cadastro</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Faça seu cadastro normalmente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Prontinho! São <strong>milhões de e-books de alta qualidade</strong> para você escolher e baixar.</span>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
              Caso prefira entrar pelo link, acesse diretamente: <a href="https://pt.z-lib.fm/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">pt.z-lib.fm</a>
            </p>
          </div>
        </Card>

        {/* Bonus Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 shadow-xl animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-accent" />
            <h2 className="text-2xl font-bold text-foreground">
              Brinde Extra 🎁
            </h2>
          </div>
          
          <p className="text-lg mb-4 text-foreground">
            Acervo Privado <strong>"A Chave da Internet"</strong>
          </p>
          <p className="text-muted-foreground mb-6">
            Com milhares de E-books e muitos outros arquivos com <strong className="text-foreground">acesso vitalício</strong>.
          </p>

          <Button 
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={() => window.open('https://chavedainternetexposeed.my.canva.site/obrigado-por-comprar-09993', '_blank')}
          >
            <Gift className="w-5 h-5" />
            ACESSAR BRINDE ESPECIAL
          </Button>
        </Card>

        {/* App Section */}
        <Card className="p-8 mb-8 shadow-xl animate-in fade-in slide-in-from-bottom duration-700 delay-700">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Aplicativo para leitura de livros
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Disponível para <strong className="text-foreground">APP Store e Google Play</strong>
          </p>

          <Button 
            variant="default"
            size="lg"
            className="w-full"
            onClick={() => window.open('https://readera.org/', '_blank')}
          >
            <Smartphone className="w-5 h-5" />
            BAIXAR APLICATIVO DE LEITURA
          </Button>
        </Card>

        {/* Contact Section */}
        <Card className="p-8 text-center bg-card/50 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-700">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">
            Precisa de ajuda?
          </h3>
          <p className="text-muted-foreground mb-4">
            Havendo qualquer dúvida ou problema, fique à vontade para entrar em contato diretamente:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 inline-block">
            <p className="font-semibold text-foreground mb-2">Professora Ana</p>
            <a 
              href="mailto:professoraana.cultura@gmail.com" 
              className="text-primary hover:underline font-medium"
            >
              professoraana.cultura@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Responderei em até 24 horas.
            </p>
          </div>
        </Card>

        {/* Footer Message */}
        <div className="text-center mt-12 animate-in fade-in duration-700 delay-1000">
          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ✨ Que sua jornada do conhecimento seja iniciada! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
