import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface Props {
  type: string;
}

export const IllustrationPlaceholder: React.FC<Props> = ({ type }) => {
  const [error, setError] = useState(false);
  
  // Mapping of Eras to the EXACT images provided by the user
  const getImage = () => {
    switch (type) {
      case 'barter': 
        // 1. Albañiles Mesopotamia (Drakkar Historia)
        return 'https://drakkarhistoria.com/wp-content/uploads/2025/05/albaniles-en-mesopotamia.jpg?w=1024';
      case 'commodity': 
        // 2. Ganado / Antigüedad (La Marea)
        return 'https://www.lamarea.com/wp-content/uploads/2016/07/Captura-de-pantalla-2016-07-14-a-las-12.57.22-1.jpg';
      case 'metal': 
        // 3. Tesorero Rey Persa (National Geographic)
        return 'https://content-historia.nationalgeographic.com.es/medio/2021/03/19/en-el-vaso-de-dario-el-tesorero-del-rey-persa-apunta-los-tributos-que-le-traen-en-sacos_f085d374_1280x1019.jpg';
      case 'paper': 
        // 4. Gold Standard (Encrypted/Cached)
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB9OH9h2EnaWAyEEcnklYVrqshIBf-4RvqA&s';
      case 'fiat': 
        // 5. Dinero Fiduciario (Top5Credits)
        return 'https://cdn.top5credits.com/es/wp-content/uploads/sites/8/2021/03/dinero-fiduciario.jpg?cdn=1.1.1';
      case 'modern': 
        // 6. Bitcoin / Digital (Pixabay)
        return 'https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg';
      default: 
        return 'https://images.unsplash.com/photo-1507842217343-583bb7260b66?q=80&w=1000&auto=format&fit=crop';
    }
  };

  return (
    <div className="w-full h-64 md:h-96 bg-[#f0e6ce] rounded-lg border-[10px] border-double border-saddle-brown/40 flex items-center justify-center relative overflow-hidden shadow-2xl mb-8 group transition-all duration-500 hover:shadow-saddle-brown/40">
      
      {!error ? (
        <img 
          src={getImage()} 
          alt={`Ilustración de ${type}`}
          onError={() => setError(true)}
          // IMPORTANT: This helps load images from external sites by not sending the referrer header
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-in-out transform group-hover:scale-110 sepia-[0.3] contrast-[1.1] brightness-[0.95] saturate-[0.7]"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-saddle-brown/50">
          <ImageOff size={48} className="mb-2 opacity-50"/>
          <span className="font-heading text-sm tracking-widest uppercase opacity-70">Imagen no disponible</span>
        </div>
      )}

      {/* 2. Paper Texture Overlay (Multiply blend mode) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-40 mix-blend-multiply pointer-events-none z-10"></div>
      
      {/* 3. Vignette (Darker corners) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50 z-20 pointer-events-none"></div>

      {/* 4. Golden/Bronze Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-saddle-brown/10 to-camel/5 mix-blend-overlay z-20 pointer-events-none"></div>

      {/* Decorative corners - Roman Style */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-khaki-beige/90 z-30 opacity-90 shadow-sm"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-khaki-beige/90 z-30 opacity-90 shadow-sm"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-khaki-beige/90 z-30 opacity-90 shadow-sm"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-khaki-beige/90 z-30 opacity-90 shadow-sm"></div>

      {/* Caption Tag */}
      <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-4 py-2 border border-camel/60 rounded-sm z-30 shadow-lg group-hover:bg-saddle-brown/90 transition-colors">
        <span className="font-heading text-khaki-beige text-xs tracking-[0.2em] uppercase font-bold">
          Fig. {type.toUpperCase()}
        </span>
      </div>
    </div>
  );
};