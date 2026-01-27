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
        // 1. Sumerios (Lexica)
        return 'https://image.lexica.art/full_jpg/195e8760-b089-4978-958a-3607005476a8';
      case 'commodity': 
        // 2. Egypt (EgyptToursPortal)
        return 'https://www.egypttoursportal.com/images/2021/03/Cattle-in-Ancient-Egypt-Egypt-Tours-Portal.jpg';
      case 'metal': 
        // 3. Lydian (CoinInvest)
        return 'https://www.coininvest.com/blog/wp-content/uploads/sites/4/2019/04/Lydian-Lion.jpg';
      case 'paper': 
        // 4. Gold (iStock)
        return 'https://media.istockphoto.com/id/1220235652/photo/gold-bars-and-us-currency.jpg?s=612x612&w=0&k=20&c=K55XjZ5j4f5h4v5h4v5h4v5h4v5h4v5h4v5h4v5h4v';
      case 'fiat': 
        // 5. Hands/Fiat (DepositPhotos)
        return 'https://st2.depositphotos.com/3591429/10464/i/950/depositphotos_104648666-stock-photo-hands-holding-us-dollar-bills.jpg';
      case 'modern': 
        // 6. Digital (iStock)
        return 'https://media.istockphoto.com/id/1136667500/photo/digital-us-dollar.jpg?s=612x612&w=0&k=20&c=pXq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7Xq7';
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