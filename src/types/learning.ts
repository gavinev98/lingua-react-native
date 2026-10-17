export type LanguageId = "spanish" | "french" | "japanese";

export type Language = {
  id: LanguageId;
  name: string;
  nativeName: string;
  flag: string;
  learners: string;
  // BCP 47 code, useful for speech recognition / text-to-speech later
  speechCode: string;
};

export type Level = "beginner" | "elementary";

export type Unit = {
  id: string;
  languageId: LanguageId;
  title: string;
  description: string;
  level: Level;
};

export type Vocabulary = {
  id: string;
  term: string;
  translation: string;
  pronunciation?: string;
};

export type Phrase = {
  id: string;
  text: string;
  translation: string;
  pronunciation?: string;
};

export type FlashcardActivity = {
  id: string;
  type: "flashcard";
  vocabularyId: string;
};

export type MultipleChoiceActivity = {
  id: string;
  type: "multiple-choice";
  question: string;
  options: string[];
  answer: string;
};

export type SpeakActivity = {
  id: string;
  type: "speak";
  phraseId: string;
};

export type Activity =
  | FlashcardActivity
  | MultipleChoiceActivity
  | SpeakActivity;

// Instructions for the AI teacher in future audio-based Vision Agent lessons
export type TeacherPrompt = {
  persona: string;
  instructions: string;
  openingLine: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  languageId: LanguageId;
  title: string;
  description: string;
  goal: string;
  xpReward: number;
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  activities: Activity[];
  teacherPrompt: TeacherPrompt;
};
