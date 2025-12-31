
<main className="flex-1 overflow-y-auto p-4 md:p-8">
  {selectedLesson ? (
    ...
{selectedLesson ? (
  <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6">
    <button 
      onClick={() => setSelectedLesson(null)}
      className="group flex items-center gap-3 text-emerald-600 font-black uppercase tracking-widest text-xs px-6 py-3 rounded-2xl hover:bg-emerald-50 transition-all"
    >
      ← Torna
    </button>
    
    <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-slate-800">
      <div className="flex items-center gap-8 mb-12">
        <div className="text-8xl">{selectedLesson.icon}</div>
        <div className="space-y-2">
          <h2 className="text-5xl font-serif font-bold">{selectedLesson.title}</h2>
          <p className="text-xl text-gray-400 italic">{selectedLesson.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedLesson.content.map((phrase, i) => (
          <div key={i} className="p-6 rounded-[2rem] border bg-gray-50 dark:bg-slate-800/40 border-gray-100 dark:border-slate-800 space-y-4">
            <span className="text-lg font-bold">{phrase}</span>
            <div className="flex gap-2">
              <button 
                onClick={() => handlePlayAudio(phrase, 'it')} 
                className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-black"
              >
                🇮🇹 ITALIANO
              </button>
              <button 
                onClick={() => handlePlayAudio(phrase, 'pt')} 
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-xs font-black"
              >
                🇧🇷 TRADUZIR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
  <LessonGrid onSelectLesson={setSelectedLesson} />
)}
) : (
  <LessonGrid
    onselectlesson={setSelectedLesson} />
  )}
</main>main>
