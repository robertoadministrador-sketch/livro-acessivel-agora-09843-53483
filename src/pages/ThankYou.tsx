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
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ThankYou = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleAccessLibrary = () => {
    window.open("https://pt.z-library.sk/", "_blank", "noopener,noreferrer");
  };

  const handleAccessBonus = () => {
    window.open(
      "https://drive.google.com/drive/folders/1rEkxrjnCVaRxOyoYPZ6cXKKOOQFdg8iD?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "95ae894d-58c1-4d23-998c-7161b6c697c3"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso! ✅");
        event.target.reset();
        setIsDialogOpen(false);
      } else {
        setResult("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setResult("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-success/10 p-6">
                <CheckCircle className="w-16 h-16 text-success" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Sua compra foi confirmada!
            </h1>
            <p className="text-xl text-muted-foreground">
              Obrigado por fazer parte da Democratização da Leitura.
            </p>
          </div>

          {/* Biblioteca */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">
                  Acesso ao acervo principal
                </h2>
              </div>

              <Button
                onClick={handleAccessLibrary}
                size="lg"
                className="w-full md:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                ACESSAR MEU ACERVO
              </Button>
            </div>
          </Card>

          {/* Brinde */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Gift className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold">
                  🎁 Brinde Extra
                </h2>
              </div>

              <Button
                onClick={handleAccessBonus}
                size="lg"
                className="w-full md:w-auto"
              >
                <Gift className="w-5 h-5 mr-2" />
                ACESSAR ACERVO PRIVADO
              </Button>
            </div>
          </Card>

          {/* Contato */}
          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">
                  Precisa de ajuda?
                </h3>
              </div>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full md:w-auto">
                    💬 Tenho uma dúvida
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>
                      Entre em contato
                    </DialogTitle>
                    <DialogDescription>
                      Resposta em até 24 horas.
                    </DialogDescription>
                  </DialogHeader>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-4"
                  >
                    <div className="space-y-2">
                      <Label>Seu nome</Label>
                      <Input
                        name="name"
                        placeholder="Digite seu nome"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Seu e-mail</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Sua mensagem</Label>
                      <Textarea
                        name="message"
                        rows={5}
                        placeholder="Digite sua mensagem..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Enviar mensagem
                    </Button>

                    {result && (
                      <p className="text-sm text-center mt-2">
                        {result}
                      </p>
                    )}
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          {/* Footer */}
          <footer className="text-center py-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Livro Acessível Agora • Professora Ana
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
