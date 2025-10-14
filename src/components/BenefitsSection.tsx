import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BookOpenCheck, Infinity, GraduationCap, Users, Download, Smartphone, Heart, TrendingUp } from "lucide-react";
const BenefitsSection = () => {
  const benefits = [{
    icon: BookOpenCheck,
    title: "Maior Acervo Digital",
    description: "Milhares de e-books best sellers cobrindo todas as especialidades: medicina, engenharia, automação, áreas acadêmicas, negócios, literatura e muito mais.",
    color: "text-primary"
  }, {
    icon: Infinity,
    title: "Acesso Vitalício",
    description: "Uma única taxa de R$ 19,90 para manutenção do site. Sem renovação, sem mensalidade. Acesso para toda a vida ao acervo completo.",
    color: "text-success"
  }, {
    icon: Download,
    title: "Máxima Compatibilidade",
    description: "Livros disponíveis para leitura online ou download. Formatos Kindle (MOBI), ePub, PDF - envie facilmente para seus dispositivos pessoais.",
    color: "text-secondary"
  }, {
    icon: Smartphone,
    title: "App de Leitura Incluso",
    description: "O melhor aplicativo grátis de leitura para celular incluído, com interface amigável e opção de audiobook para tornar a leitura acessível a todos.",
    color: "text-gold"
  }, {
    icon: GraduationCap,
    title: "Conhecimento Democrático",
    description: "Precisa de um livro acadêmico e está muito caro? Se existir em formato digital, com certeza encontrará aqui para baixar.",
    color: "text-primary"
  }, {
    icon: TrendingUp,
    title: "Desenvolvimento Pessoal",
    description: "Estímulo ao desenvolvimento intelectual e quebra de barreiras sociais. Enriqueça trabalhos acadêmicos, pesquisas e crescimento profissional.",
    color: "text-secondary"
  }];
  const socialImpact = ["Democratização do acesso ao conhecimento", "Combate aos preços abusivos de livros acadêmicos", "Oportunidades iguais de aprendizado para todos", "Quebra de barreiras sociais através da leitura"];
  return <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            🎯 Benefícios Exclusivos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o
            <span className="text-hero"> Livro Acessível Agora</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma revolução no acesso ao conhecimento, criada pela Professora Ana para 
            democratizar a educação e impulsionar o crescimento pessoal e profissional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => <Card key={index} className="p-6 backdrop-blur-subtle hover-lift transition-smooth fade-in-up border-primary/20" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start space-x-4">
                <div className={`${benefit.color} flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Social Impact Section */}
        <div className="backdrop-blur-modern rounded-2xl p-8 md:p-12 glow-primary fade-in-up">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nosso Compromisso Social
            </h3>
            <p className="text-lg text-muted-foreground mb-6">Criado pela Professora Ana, formada em Administração, Letras e Antropologia, este projeto vai além do conhecimento - é uma missão de transformação social.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Nosso Impacto:</h4>
              <ul className="space-y-3">
                {socialImpact.map((impact, index) => <li key={index} className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{impact}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="backdrop-blur-subtle rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4 text-gold">Para Quem é Este Projeto:</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📚 Estudantes universitários</p>
                <p>🎓 Profissionais em desenvolvimento</p>
                <p>🔬 Pesquisadores e acadêmicos</p>
                <p>💼 Empreendedores e empresários</p>
                <p>📖 Amantes da leitura em geral</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;