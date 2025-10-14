import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
interface VideoPlayerProps {
  videoUrl?: string;
  videoId?: string;
  platform?: "youtube" | "vimeo";
  title?: string;
  description?: string;
}
const VideoPlayer = ({
  videoUrl,
  videoId,
  platform = "youtube",
  title = "Vídeo de Apresentação",
  description = "Conheça a missão da Professora Ana"
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const getEmbedUrl = () => {
    if (videoUrl) return videoUrl;
    if (!videoId) return "";
    if (platform === "youtube") {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    } else if (platform === "vimeo") {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&color=6366f1`;
    }
    return "";
  };
  const handlePlay = () => {
    if (!videoId && !videoUrl) {
      // Placeholder behavior - show modal for instructions
      setShowModal(true);
      return;
    }
    setIsPlaying(true);
  };
  const handleClose = () => {
    setIsPlaying(false);
    setShowModal(false);
  };
  return <>
      <div className="relative mx-auto max-w-6xl">
        <div className="aspect-video bg-gradient-dark rounded-2xl relative overflow-hidden border border-primary/20 glow-primary">
          {isPlaying && (videoId || videoUrl) ? <div className="absolute inset-0 z-20">
              <iframe src={getEmbedUrl()} className="w-full h-full rounded-2xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
              <Button variant="ghost" size="sm" className="absolute top-4 right-4 z-30 bg-background/80 hover:bg-background" onClick={handleClose}>
                <X className="w-5 h-5" />
              </Button>
            </div> : <>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
                <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}>
                </div>
              </div>

              {/* Main Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                {/* Video Preview Mockup */}
                <div className="absolute top-6 right-6 w-32 h-20 bg-primary/20 rounded-lg border border-primary/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-hero opacity-60 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground/80 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Main Headlines */}
                <div className="max-w-4xl space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-hero bg-gradient-hero bg-clip-text text-transparent">
                      Maior Acervo
                    </span>
                    <span className="block text-primary-foreground mt-2">
                      de E-books
                    </span>
                    <span className="block text-success font-extrabold mt-2">
                      da Internet
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto leading-relaxed">
                    <span className="text-warning font-bold">Milhares de livros</span> para baixar instantaneamente.
                    <br />
                    <span className="text-primary-glow">Conhecimento sem limites</span> ao seu alcance.
                  </p>

                  {/* CTA Elements */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30 hover-lift cursor-pointer transition-smooth pulse-glow" onClick={handlePlay}>
                        <Play className="w-10 h-10 text-primary-foreground ml-1" />
                      </div>
                      <div className="text-left">
                        <p className="text-primary-foreground font-semibold text-lg">
                          Veja Como Funciona
                        </p>
                        <p className="text-primary-foreground/70 text-sm">1 minuto de demonstração</p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Elements */}
                  <div className="flex items-center justify-center gap-8 mt-8 text-primary-foreground/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Download Imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Acesso Vitalício</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-6 h-6 bg-primary/30 rounded-full float"></div>
                <div className="absolute bottom-32 right-32 w-4 h-4 bg-secondary/40 rounded-full float" style={{
              animationDelay: '2s'
            }}></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full float" style={{
              animationDelay: '4s'
            }}></div>
              </div>

              {!videoId && !videoUrl && <div className="absolute bottom-4 right-4 text-primary-foreground/40 text-xs">
                  Clique para configurar o vídeo
                </div>}
            </>}
        </div>
      </div>

      {/* Modal de Instruções */}
      {showModal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-4 fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Configure seu Vídeo</h3>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">📹 YouTube</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  1. Faça upload do seu vídeo no YouTube
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  2. Copie o ID do vídeo da URL (ex: dQw4w9WgXcQ)
                </p>
                <p className="text-muted-foreground text-sm">
                  3. Adicione: videoId="SEU_ID" platform="youtube"
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">🎬 Vimeo</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  1. Faça upload do seu vídeo no Vimeo
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  2. Copie o ID do vídeo da URL (números no final)
                </p>
                <p className="text-muted-foreground text-sm">
                  3. Adicione: videoId="SEU_ID" platform="vimeo"
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-2">Exemplo de uso:</p>
                <code className="text-sm text-primary">
                  &lt;VideoPlayer videoId="dQw4w9WgXcQ" platform="youtube" /&gt;
                </code>
              </div>
            </div>
          </div>
        </div>}
    </>;
};
export default VideoPlayer;