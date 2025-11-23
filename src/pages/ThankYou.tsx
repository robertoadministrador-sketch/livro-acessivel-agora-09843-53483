import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard, Lock } from "lucide-react";

const MeuCheckout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-lg">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Finalize sua Compra
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Você está a um passo de ter acesso ao maior acervo de e-books
          </p>
        </div>

        {/* Checkout Content */}
        <Card className="p-8 mb-8 shadow-xl animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Informações de Pagamento
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Resumo do Pedido</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Acesso ao Acervo de E-books</span>
                  <span className="font-semibold text-foreground">R$ 47,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bônus: A Chave da Internet</span>
                  <span className="font-semibold text-primary">GRÁTIS</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-2xl text-primary">R$ 47,00</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
              <Lock className="w-4 h-4 text-primary" />
              <span>Pagamento 100% seguro e criptografado</span>
            </div>

            <Button 
              size="lg"
              className="w-full"
              onClick={() => {
                // Aqui você pode adicionar a integração com o gateway de pagamento
                window.location.href = '/obrigado';
              }}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              FINALIZAR COMPRA
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Ao finalizar a compra, você será redirecionado para a página de agradecimento com acesso imediato ao acervo
            </p>
          </div>
        </Card>

        {/* Security Notice */}
        <Card className="p-6 text-center bg-card/50 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-primary" />
            <span>Seus dados estão protegidos com criptografia de ponta</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MeuCheckout;
