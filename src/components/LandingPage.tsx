
import React from "react";

interface LandingPageProps {
  onStartTrial: () => void;
  onViewPrivacy?: () => void;
  onViewTerms?: () => void;
  onViewRefund?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  onStartTrial,
  onViewPrivacy,
  onViewTerms,
  onViewRefund
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-green-50 dark:from-slate-900 dark:to-slate-950 p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        CiaoBrasil
      </h1>
      <p className="text-lg md:text-xl text-center mb-10 max-w-xl">
        Aprenda italiano de forma moderna com o Tutor IA Luca. Interativo, divertido e para iniciantes.
      </p>
      <button
        onClick={onStartTrial}
        className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-3xl hover:bg-emerald-500 transition-all mb-6"
      >
        Começar agora
      </button>

      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
        {onViewPrivacy && <button onClick={onViewPrivacy}>Privacidade</button>}
        {onViewTerms && <button onClick={onViewTerms}>Termos</button>}
        {onViewRefund && <button onClick={onViewRefund}>Reembolso</button>}
      </div>
    </div>
  );
};

export default LandingPage;
