import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Gift, Mail, CheckCircle, Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ThankYou = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleAccessLibrary = () => {
    window.open("https://pt.z-lib.fm/", "_blank", "noopener,noreferrer");
  };

  const handleAccessBonus = () => {
    window.open("https://drive.google.com/drive/folders/1rEkxrjnCVaRxOyoYPZ6cXKKOOQFdg8iD?usp=drive_link", "_blank", "noopener,noreferrer");
  };

  const handleSendMessage = () => {
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    window.location.href = `mailto:professoraana.cultura@gmail.com?subject=${subject}&body=${body}`;
    setIsDialogOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          {/* Header com confirmação */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-success/10 p-6 glow-primary">
                <CheckCircle className="w-16 h-16 text-success" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-hero">
              Sua compra foi confirmada!
            </h1>
            <p className="text-xl text-muted-foreground">
              Agradecemos por fazer parte da Democratização da Leitura.
            </p>
          </div>

          {/* Aviso importante */}
          <Card className="p-6 backdrop-blur-modern border-primary/20">
            <p className="text-center text-lg text-foreground font-medium">
              ⭐ Salve este endereço no seu computador ou celular para acesso futuro
            </p>
          </Card>

          {/* Acesso ao acervo principal */}
          <Card className="p-8 backdrop-blur-modern border-primary/20 hover-lift transition-smooth">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Link para acesso imediato ao acervo de livros
                </h2>
              </div>
              
              <p className="text-muted-foreground">
                Para ler ou baixar milhões de e-books de alta qualidade:
              </p>

              <Button 
                onClick={handleAccessLibrary}
                variant="cta" 
                size="xl"
                className="w-full md:w-auto"
              >
                <BookOpen className="w-5 h-5" />
                ACESSAR MEU ACERVO DE E-BOOKS
              </Button>

              <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary">📝</span> Como acessar:
                </h3>
                <ol className="space-y-2 text-muted-foreground ml-6 list-decimal">
                  <li>Clique em "Entrar"</li>
                  <li>Selecione "Criar cadastro"</li>
                  <li>Faça seu cadastro normalmente</li>
                  <li>Prontinho! São milhões de e-books de alta qualidade para você escolher e baixar</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Brinde extra */}
          <Card className="p-8 backdrop-blur-modern border-gold/30 bg-gradient-premium/5 hover-lift transition-smooth">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold/10 p-3">
                  <Gift className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold-foreground">
                  🎁 Brinde Extra
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground font-semibold">
                  Acervo Privado "Milhares de E-books no Google Drive"
                </p>
                <p className="text-muted-foreground">
                  Milhares de E-books e muitos outros arquivos com acesso vitalício.
                </p>

                <Button 
                  onClick={handleAccessBonus}
                  variant="premium" 
                  size="xl"
                  className="w-full md:w-auto"
                >
                  <Gift className="w-5 h-5" />
                  ACESSAR BRINDE EXTRA
                </Button>
              </div>
            </div>
          </Card>

          {/* Contato */}
          <Card className="p-8 backdrop-blur-modern border-accent/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-3">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Precisa de ajuda?
                </h3>
              </div>
              
              <p className="text-muted-foreground">
                Havendo qualquer dúvida ou problema, fique à vontade para entrar em contato diretamente:
              </p>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="default" size="lg" className="w-full md:w-auto">
                    <Mail className="w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Enviar Mensagem</DialogTitle>
                    <DialogDescription>
                      Preencha o formulário abaixo. Sua mensagem será enviada para professoraana.cultura@gmail.com
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Seu Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Digite sua mensagem..."
                        rows={5}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleSendMessage}>
                      Enviar Mensagem
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                <p className="font-semibold text-foreground">Professora Ana</p>
                <a 
                  href="mailto:professoraana.cultura@gmail.com"
                  className="text-primary hover:text-primary-glow transition-smooth inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  professoraana.cultura@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Responderei em até 24 horas.
                </p>
              </div>
            </div>
          </Card>

          {/* Mensagem final */}
          <div className="text-center py-8">
            <p className="text-2xl font-semibold text-hero">
              ✨ Que sua jornada do conhecimento seja iniciada! ✨
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer Simplificado */}
      <footer className="relative py-12 border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center">
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
      </footer>
    </main>
  );
};

export default ThankYou;
