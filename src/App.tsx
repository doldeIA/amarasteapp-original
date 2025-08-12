import React, { useState, useEffect } from 'react';

const PDF_PATH = '/home.pdf'; // coloque o PDF em public/home.pdf

const LandingScreen: React.FC<{ onAccess: () => void }> = ({ onAccess }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-primary">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Amarasté
        </h1>
        <p className="mb-6 text-white/80">Integração OK ✅<br/>Olá! Estou pronto para ajudar com o AmarasteApp.</p>
        <button
          onClick={onAccess}
          className="w-full py-3 rounded-lg font-bold text-white bg-black/40 border border-white/30 neon-pulse"
        >
          ACESSAR
        </button>
        <p className="text-xs text-white/60 mt-3">Amaraste Live Music 2025º</p>
      </div>
    </div>
  );
};

const PdfViewer: React.FC<{ src: string; onBack: () => void }> = ({ src, onBack }) => {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onBack} className="py-2 px-3 bg-white/5 rounded text-white">Voltar</button>
          <p className="text-white/70 text-sm">Conteúdo</p>
        </div>
        <div className="w-full h-[80vh] bg-white rounded overflow-hidden shadow-lg object-pdf-wrapper">
          {/* Use <object> para compatibilidade */}
          <object
            data={src}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>Seu navegador não suporta exibir PDF. <a href={src} className="text-blue-400">Clique para baixar</a></p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState<'landing' | 'pdf'>('landing');
  const [pdfExists, setPdfExists] = useState(true);

  useEffect(() => {
    // quick check if pdf is available
    fetch(PDF_PATH, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) setPdfExists(false);
      })
      .catch(() => setPdfExists(false));
  }, []);

  if (!pdfExists) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#A13500] text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Arquivo PDF não encontrado</h2>
          <p className="mt-3">Verifique se <code>/public/home.pdf</code> foi enviado ao repositório.</p>
        </div>
      </div>
    );
  }

  return screen === 'landing' ? (
    <LandingScreen onAccess={() => setScreen('pdf')} />
  ) : (
    <PdfViewer src={PDF_PATH} onBack={() => setScreen('landing')} />
  );
}
