
export const gemini = {
  generateAvatar: async (type: string, style: string) => {
    // Simulazione avatar
    return `/avatar-${type}-${style}.png`;
  },
  speak: async (text: string, mode: 'it' | 'pt') => {
    console.log(`Speak [${mode}]: ${text}`);
  }
};