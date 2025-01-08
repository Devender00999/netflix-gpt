const lang: Record<string, { search: string; gptSearchPlaceholder: string }> = {
   en: {
      search: "Search",
      gptSearchPlaceholder: "What would you like to search?",
   },
   hi: {
      search: "खोज",
      gptSearchPlaceholder: "आप क्या खोज करना चाहेंगे?",
   },
   es: {
      search: "Buscar",
      gptSearchPlaceholder: "¿Qué te gustaría buscar?",
   },
   kn: {
      search: "ಹುಡುಕಿ",
      gptSearchPlaceholder: "ನೀವು ಏನು ಹುಡುಕಲು ಇಚ್ಛಿಸುತ್ತೀರಿ",
   },
   fr: {
      search: "Rechercher",
      gptSearchPlaceholder: "Que souhaitez-vous rechercher ?",
   },
   de: {
      search: "Suchen",
      gptSearchPlaceholder: "Was möchten Sie suchen?",
   },
   zh: {
      search: "搜索",
      gptSearchPlaceholder: "您想搜索什么？",
   },
   ar: {
      search: "بحث",
      gptSearchPlaceholder: "ماذا تريد أن تبحث؟",
   },
};

export const availableLanguages = [
   {
      language: "Hindi",
      langCode: "hi",
      description: "Hindi is popular in India.",
   },
   {
      language: "English",
      langCode: "en",
      description: "It is used worldwide.",
   },
   {
      language: "Spanish",
      langCode: "es",
      description: "Spanish is widely spoken in Spain and Latin America.",
   },
   {
      language: "Kannada",
      langCode: "kn",
      description:
         "Kannada is primarily spoken in the state of Karnataka, India.",
   },
   {
      language: "French",
      langCode: "fr",
      description:
         "French is widely spoken in France, Canada, and parts of Africa.",
   },
   {
      language: "German",
      langCode: "de",
      description:
         "German is widely spoken in Germany, Austria, and Switzerland.",
   },
   {
      language: "Chinese (Simplified)",
      langCode: "zh",
      description:
         "Chinese (Simplified) is primarily used in mainland China and Singapore.",
   },
   {
      language: "Arabic",
      langCode: "ar",
      description:
         "Arabic is widely spoken in the Middle East and North Africa.",
   },
];

export default lang;
