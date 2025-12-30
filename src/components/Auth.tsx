
import React, { useState } from 'react';

interface AuthProps {
  onLogin: (userData: { email: string; name: string }) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de autenticação
    onLogin({ 
      email: email || 'utente@ciaobrasil.it', 
      name: name || 'Estudante Brasiliano' 
    });
  };

  const handleGoogleLogin = () => {
    // Simulação de Google Auth
    onLogin({ email: 'google.user@gmail.com', name: 'Usuário Google' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 p-8 md:p-10 space-y-8 animate-in fade-in zoom-in duration-500">
        
        <div className="text-center space-y-2">
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-3 h-8 bg-[#009246] rounded-full"></div>
            <div className="w-3 h-8 bg-white border border-gray-100 dark:bg-slate-800 dark:border-slate-700 rounded-full"></div>
            <div className="w-3 h-8 bg-[#ce2b37] rounded-full"></div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">CiaoBrasil</h1>
          <p className="text-gray-500 dark:text-slate-400 italic text-sm">
            {isLogin ? 'Benvenuto di nuovo! 👋' : 'Inizia il tuo viaggio! 🇮🇹'}
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl font-bold text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-750 transition-all shadow-sm active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Entrar com Google
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-100 dark:border-slate-800"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-gray-400 dark:text-slate-600 uppercase tracking-widest">ou use seu e-mail</span>
            <div className="flex-grow border-t border-gray-100 dark:border-slate-800"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-emerald-500 focus:outline-none dark:text-white transition-all"
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@email.com"
                className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-emerald-500 focus:outline-none dark:text-white transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-emerald-500 focus:outline-none dark:text-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 dark:shadow-none active:scale-95"
            >
              {isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
            </button>
          </form>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
