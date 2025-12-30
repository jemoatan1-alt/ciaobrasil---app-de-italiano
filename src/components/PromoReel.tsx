
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface PromoVideo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  prompt: string;
  imageUrl: string;
}

const PROMO_DATA: PromoVideo[] = [
  {
    id: 'vision',
    title: 'Visione Aumentata',
    subtitle: 'La Storia incontra il Futuro',
    description: 'Vedi il mondo attraverso gli occhi della lingua italiana.',
    prompt: 'A futuristic cinematic video of a woman wearing glowing high-tech headsets, neural data streams and digital interfaces floating around her in front of the Roman Colosseum at sunset, realistic lighting, 4k.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'translation',
    title: 'Traduzione Neurale',
    subtitle: 'Oltre le Parole',
    description: 'Algoritmi avanzati che interpretano non solo cosa dici, ma come lo dici.',
    prompt: 'Close up of a futuristic holographic tablet floating in a digital dark room, displaying glowing neon blue voice patterns and Italian word translations in real-time, data lines connecting to a digital anatomical figure, cyberpunk aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1581090464762-64667bc1ef84?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gamification',
    title: 'Traguardi Reali',
    subtitle: 'Il Piacere di Imparare',
    description: 'Ogni parola è una conquista, ogni frase una vittoria.',
    prompt: 'A cinematic video of a happy young man on a beach at night looking at his smartphone, a bright holographic green progress bar fills up in the air with sparks and "CONQUISTA ALCANÇADA" text, glowing particles, 4k resolution.',
    imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'robot',
    title: 'Il Tuo Tutor IA',
    subtitle: 'Luca è sempre con te',
    description: 'Un compagno di studi intelligente che non dorme mai.',
    prompt: 'A friendly silver metallic robot waving its hand, standing next to a giant futuristic smartphone showing a glowing colorful brain icon and a large "DOWNLOAD" button, blurred city lights background, soft cinematic render.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

const PromoReel: React.FC = () => {
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [generatedVideos, setGeneratedVideos] = useState<Record<string, string>>({});
  const [loadingMsg, setLoadingMsg] = useState('');
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const generateVideo = async (promo: PromoVideo) => {
    if (generatingId) return;

    try {
      if (!(await (window as any).aistudio.hasSelectedApiKey())) {
        await (window as any).aistudio.openSelectKey();
      }

      setGeneratingId(promo.id);
      setLoadingMsg('Inizializzando i motori neurali...');
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: promo.prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      setLoadingMsg('Luca sta dipingendo i fotogrammi...');
      
      let pollCount = 0;
      while (!operation.done) {
        pollCount++;
        await new Promise(resolve => setTimeout(resolve, 8000));
        setLoadingMsg(`Rendering neurale... (${pollCount * 8}s)`);
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setLoadingMsg('Download del flusso MP4...');
        
        // Aggiungiamo esplicitamente la chiave API all'URL per evitare 403 o mancate risposte
        const fullUrl = downloadLink.includes('key=') ? downloadLink : `${downloadLink}&key=${process.env.API_KEY}`;
        const videoResponse = await fetch(fullUrl);
        
        if (!videoResponse.ok) throw new Error("Errore HTTP nel recupero del video: " + videoResponse.status);
        
        const videoBlob = await videoResponse.blob();
        if (videoBlob.size < 100) throw new Error("Video generato troppo piccolo, probabile errore API.");

        // Se avevamo un URL precedente per questo ID, lo revochiamo per liberare memoria
        if (generatedVideos[promo.id]) {
          URL.revokeObjectURL(generatedVideos[promo.id]);
        }
        
        const videoUrl = URL.createObjectURL(videoBlob);
        
        setGeneratedVideos(prev => ({
          ...prev,
          [promo.id]: videoUrl
        }));

        // Forza il caricamento del DOM video dopo l'aggiornamento dello stato
        setTimeout(() => {
          const videoElement = videoRefs.current[promo.id];
          if (videoElement) {
            videoElement.load();
            videoElement.play().catch(e => console.warn("Autoplay impedito per il video:", e));
          }
        }, 100);
      }
    } catch (error: any) {
      console.error("Errore generazione video:", error);
      if (error.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio.openSelectKey();
      } else {
        alert("Ops! La rete neurale è un po' carica. Se hai attivato la chiave, prova ad attendere qualche istante e clicca di nuovo.");
      }
    } finally {
      setGeneratingId(null);
      setLoadingMsg('');
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white rounded-[4rem] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              Guarda il <span className="text-emerald-400">Futuro</span>
            </h2>
            <p className="text-slate-400 max-w-lg">
              Abbiamo fuso la bellezza del Rinascimento con la potenza del calcolo neurale. Genera un'anteprima video con l'IA di Luca.
            </p>
          </div>
          <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <span className="animate-pulse">●</span> Powered by Veo 3.1
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROMO_DATA.map((promo) => (
            <div 
              key={promo.id}
              className="group relative bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-slate-950">
                {generatedVideos[promo.id] ? (
                  <video 
                    ref={el => videoRefs.current[promo.id] = el}
                    src={generatedVideos[promo.id]} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in duration-1000"
                  />
                ) : (
                  <>
                    <img 
                      src={promo.imageUrl} 
                      alt={promo.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${generatingId === promo.id ? 'opacity-20 blur-md' : 'opacity-40'}`}
                    />
                    {generatingId === promo.id && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30">
                        <div className="w-20 h-2 bg-slate-800 rounded-full mb-6 overflow-hidden relative">
                          <div className="absolute inset-y-0 left-0 bg-emerald-500 w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
                        </div>
                        <p className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] animate-pulse">{loadingMsg}</p>
                      </div>
                    )}
                    {!generatingId && !generatedVideos[promo.id] && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-full border border-emerald-500/30">
                          <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Genera Video AI</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
                
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black border border-white/10 uppercase tracking-widest z-20 shadow-lg">
                  {promo.subtitle}
                </div>
              </div>

              <div className="p-8 space-y-4 bg-slate-900/50 relative z-10 backdrop-blur-lg">
                <div className="flex justify-between items-start gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{promo.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{promo.description}</p>
                  </div>
                  <button 
                    onClick={() => generateVideo(promo)}
                    disabled={generatingId !== null}
                    className={`w-16 h-16 flex-shrink-0 rounded-[1.25rem] flex items-center justify-center text-2xl transition-all shadow-xl active:scale-90 disabled:opacity-20 ${
                      generatedVideos[promo.id] ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-white text-black hover:bg-emerald-400 hover:text-white'
                    }`}
                  >
                    {generatingId === promo.id ? (
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : generatedVideos[promo.id] ? '✨' : '▶'}
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-white to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </section>
  );
};

export default PromoReel;
