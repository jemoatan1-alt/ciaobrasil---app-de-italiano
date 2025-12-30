
import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
      >
        ← Voltar
      </button>

      <div className="prose prose-emerald dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Política de Privacidade</h1>
        <p className="text-gray-500 dark:text-slate-400 italic">Última atualização: 24 de Maio de 2024</p>

        <section className="mt-10 space-y-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
            <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mt-0">1. Introdução</h2>
            <p className="text-gray-700 dark:text-slate-300">
              O aplicativo <strong>Tutor IA Luca</strong> ("nós", "nosso") valoriza a sua privacidade. Esta Política explica como coletamos, usamos e protegemos seus dados em conformidade com a Lei Geral de Proteção de Dados (LGPD - Brasil) e o General Data Protection Regulation (GDPR - União Europeia).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Dados que Coletamos</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-slate-300">
            <li><strong>Dados Cadastrais:</strong> Nome e endereço de e-mail fornecidos durante o login ou registro (via formulário ou Google Auth).</li>
            <li><strong>Dados de Voz e Texto:</strong> Áudios e mensagens enviados para interação com o Tutor IA para fins puramente educacionais e de processamento de resposta.</li>
            <li><strong>Dados de Pagamento:</strong> Não armazenamos dados de cartão de crédito. Todas as transações são processadas com segurança pelo <strong>Stripe</strong>.</li>
            <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador e cookies para melhoria da experiência e análise de marketing (Pixels).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Finalidade do Tratamento</h2>
          <p className="text-gray-700 dark:text-slate-300">
            Utilizamos seus dados para:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Prover a experiência de aprendizado personalizado com IA.</li>
            <li>Processar sua assinatura vitalícia via Stripe.</li>
            <li>Enviar comunicações importantes sobre sua conta ou progresso.</li>
            <li>Melhorar nossa tecnologia de reconhecimento de voz.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Compartilhamento com Terceiros</h2>
          <p className="text-gray-700 dark:text-slate-300">
            Compartilhamos dados estritamente necessários com operadores de confiança:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-slate-300">
            <li><strong>Google GenAI:</strong> Para processamento de linguagem natural e geração de respostas (dados pseudonimizados).</li>
            <li><strong>Stripe:</strong> Gateway de pagamento seguro.</li>
            <li><strong>Serviços de Analytics:</strong> Para entender o comportamento de uso e otimizar conversões.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Seus Direitos (LGPD/GDPR)</h2>
          <p className="text-gray-700 dark:text-slate-300">
            Você tem o direito de:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Confirmar a existência de tratamento e acessar seus dados.</li>
            <li>Corrigir dados incompletos ou inexatos.</li>
            <li>Solicitar a <strong>exclusão definitiva</strong> de sua conta e dados.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>

          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-0">6. Contato do Encarregado (DPO)</h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm">
              Para exercer seus direitos ou tirar dúvidas, entre em contato com nosso Encarregado de Proteção de Dados:
            </p>
            <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-2">privacy@ciaobrasil.app</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
