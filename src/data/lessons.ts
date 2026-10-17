import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ---------- Spanish ----------
  {
    id: "spanish-greetings",
    unitId: "spanish-basics",
    languageId: "spanish",
    title: "Greetings",
    description: "Say hello and goodbye",
    goal: "Greet someone and say goodbye in Spanish",
    xpReward: 10,
    vocabulary: [
      { id: "hola", term: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { id: "adios", term: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" },
      { id: "gracias", term: "Gracias", translation: "Thank you", pronunciation: "GRAH-syahs" },
    ],
    phrases: [
      { id: "buenos-dias", text: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
      { id: "como-estas", text: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh ehs-TAHS" },
    ],
    activities: [
      { id: "a1", type: "flashcard", vocabularyId: "hola" },
      { id: "a2", type: "flashcard", vocabularyId: "adios" },
      { id: "a3", type: "flashcard", vocabularyId: "gracias" },
      {
        id: "a4",
        type: "multiple-choice",
        question: 'What does "Gracias" mean?',
        options: ["Hello", "Thank you", "Goodbye"],
        answer: "Thank you",
      },
      { id: "a5", type: "speak", phraseId: "buenos-dias" },
      { id: "a6", type: "speak", phraseId: "como-estas" },
    ],
    teacherPrompt: {
      persona: "Sofía, a warm and patient Spanish teacher",
      instructions:
        "Teach the words Hola, Adiós and Gracias, then the phrases Buenos días and ¿Cómo estás?. Speak slowly, use short English explanations, ask the student to repeat each word, and gently correct pronunciation. Keep the lesson under 5 minutes.",
      openingLine: "¡Hola! I'm Sofía. Today we'll learn how to say hello in Spanish.",
    },
  },
  {
    id: "spanish-introductions",
    unitId: "spanish-basics",
    languageId: "spanish",
    title: "Introductions",
    description: "Say your name and where you're from",
    goal: "Introduce yourself in Spanish",
    xpReward: 15,
    vocabulary: [
      { id: "nombre", term: "Nombre", translation: "Name", pronunciation: "NOHM-breh" },
      { id: "soy", term: "Soy", translation: "I am", pronunciation: "soy" },
      { id: "de", term: "De", translation: "From", pronunciation: "deh" },
    ],
    phrases: [
      { id: "me-llamo", text: "Me llamo Ana", translation: "My name is Ana", pronunciation: "meh YAH-moh AH-nah" },
      { id: "mucho-gusto", text: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-choh GOOS-toh" },
    ],
    activities: [
      { id: "a1", type: "flashcard", vocabularyId: "nombre" },
      { id: "a2", type: "flashcard", vocabularyId: "soy" },
      {
        id: "a3",
        type: "multiple-choice",
        question: 'How do you say "Nice to meet you"?',
        options: ["Mucho gusto", "Buenos días", "Adiós"],
        answer: "Mucho gusto",
      },
      { id: "a4", type: "speak", phraseId: "me-llamo" },
      { id: "a5", type: "speak", phraseId: "mucho-gusto" },
    ],
    teacherPrompt: {
      persona: "Sofía, a warm and patient Spanish teacher",
      instructions:
        "Help the student introduce themselves. Teach Me llamo and Mucho gusto, then ask the student to say their own name and respond naturally. Correct mistakes kindly.",
      openingLine: "¡Hola de nuevo! Let's practice introducing ourselves. Me llamo Sofía. ¿Y tú?",
    },
  },
  {
    id: "spanish-cafe",
    unitId: "spanish-food",
    languageId: "spanish",
    title: "At the Café",
    description: "Order a drink and a snack",
    goal: "Order food and a drink politely in Spanish",
    xpReward: 15,
    vocabulary: [
      { id: "agua", term: "Agua", translation: "Water", pronunciation: "AH-gwah" },
      { id: "cafe", term: "Café", translation: "Coffee", pronunciation: "kah-FEH" },
      { id: "pan", term: "Pan", translation: "Bread", pronunciation: "pahn" },
    ],
    phrases: [
      { id: "quiero-cafe", text: "Quiero un café, por favor", translation: "I want a coffee, please", pronunciation: "KYEH-roh oon kah-FEH por fah-VOR" },
      { id: "la-cuenta", text: "La cuenta, por favor", translation: "The bill, please", pronunciation: "lah KWEHN-tah por fah-VOR" },
    ],
    activities: [
      { id: "a1", type: "flashcard", vocabularyId: "agua" },
      { id: "a2", type: "flashcard", vocabularyId: "cafe" },
      { id: "a3", type: "flashcard", vocabularyId: "pan" },
      {
        id: "a4",
        type: "multiple-choice",
        question: 'What does "Pan" mean?',
        options: ["Water", "Coffee", "Bread"],
        answer: "Bread",
      },
      { id: "a5", type: "speak", phraseId: "quiero-cafe" },
      { id: "a6", type: "speak", phraseId: "la-cuenta" },
    ],
    teacherPrompt: {
      persona: "Sofía, a friendly café waiter and Spanish teacher",
      instructions:
        "Role-play a café. Teach the food and drink words, then play the waiter and let the student order. Stay in simple Spanish with English hints when the student is stuck.",
      openingLine: "¡Bienvenido al café! What would you like to order today?",
    },
  },

  // ---------- French ----------
  {
    id: "french-greetings",
    unitId: "french-basics",
    languageId: "french",
    title: "Greetings",
    description: "Say hello and goodbye",
    goal: "Greet someone and say goodbye in French",
    xpReward: 10,
    vocabulary: [
      { id: "bonjour", term: "Bonjour", translation: "Hello", pronunciation: "bon-ZHOOR" },
      { id: "au-revoir", term: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAR" },
      { id: "merci", term: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
    ],
    phrases: [
      { id: "comment-allez-vous", text: "Comment allez-vous ?", translation: "How are you?", pronunciation: "koh-mahn tah-lay VOO" },
      { id: "je-mappelle", text: "Je m'appelle Léa", translation: "My name is Léa", pronunciation: "zhuh mah-PEL lay-AH" },
    ],
    activities: [
      { id: "a1", type: "flashcard", vocabularyId: "bonjour" },
      { id: "a2", type: "flashcard", vocabularyId: "au-revoir" },
      { id: "a3", type: "flashcard", vocabularyId: "merci" },
      {
        id: "a4",
        type: "multiple-choice",
        question: 'What does "Bonjour" mean?',
        options: ["Hello", "Thank you", "Goodbye"],
        answer: "Hello",
      },
      { id: "a5", type: "speak", phraseId: "comment-allez-vous" },
      { id: "a6", type: "speak", phraseId: "je-mappelle" },
    ],
    teacherPrompt: {
      persona: "Camille, a cheerful and encouraging French teacher",
      instructions:
        "Teach Bonjour, Au revoir and Merci, then the phrases Comment allez-vous ? and Je m'appelle. Speak slowly, ask the student to repeat, and focus on French pronunciation.",
      openingLine: "Bonjour! I'm Camille. Let's learn to greet people in French.",
    },
  },

  // ---------- Japanese ----------
  {
    id: "japanese-greetings",
    unitId: "japanese-basics",
    languageId: "japanese",
    title: "Greetings",
    description: "Say hello and thank you",
    goal: "Greet someone and say thank you in Japanese",
    xpReward: 10,
    vocabulary: [
      { id: "konnichiwa", term: "こんにちは", translation: "Hello", pronunciation: "kon-nee-chee-wah" },
      { id: "sayonara", term: "さようなら", translation: "Goodbye", pronunciation: "sah-yoh-nah-rah" },
      { id: "arigato", term: "ありがとう", translation: "Thank you", pronunciation: "ah-ree-gah-toh" },
    ],
    phrases: [
      { id: "ohayo", text: "おはようございます", translation: "Good morning", pronunciation: "oh-hah-yoh go-zai-mas" },
      { id: "hajimemashite", text: "はじめまして", translation: "Nice to meet you", pronunciation: "hah-jee-meh-mash-teh" },
    ],
    activities: [
      { id: "a1", type: "flashcard", vocabularyId: "konnichiwa" },
      { id: "a2", type: "flashcard", vocabularyId: "sayonara" },
      { id: "a3", type: "flashcard", vocabularyId: "arigato" },
      {
        id: "a4",
        type: "multiple-choice",
        question: 'What does "ありがとう" mean?',
        options: ["Hello", "Goodbye", "Thank you"],
        answer: "Thank you",
      },
      { id: "a5", type: "speak", phraseId: "ohayo" },
      { id: "a6", type: "speak", phraseId: "hajimemashite" },
    ],
    teacherPrompt: {
      persona: "Yuki, a gentle and patient Japanese teacher",
      instructions:
        "Teach the greetings using romaji alongside the Japanese script. Go slowly, have the student repeat each word, and explain when each greeting is used.",
      openingLine: "こんにちは! I'm Yuki. Let's learn some Japanese greetings together.",
    },
  },
];

export const getLessonById = (id: string) =>
  lessons.find((lesson) => lesson.id === id);

export const getLessonsByUnit = (unitId: string) =>
  lessons.filter((lesson) => lesson.unitId === unitId);
