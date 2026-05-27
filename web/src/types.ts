export type SystemId =
  | "skeletal"
  | "muscular"
  | "circulatory"
  | "respiratory"
  | "digestive"
  | "nervous";

export interface BodySystem {
  id: SystemId;
  name: string;
  color: string;
  colorLight: string;
  description: string;
}

export interface BodyPart {
  id: string;
  name: string;
  system: SystemId;
  function: string;
  funFact: string;
  related: string[];
}

export type Difficulty = "easy" | "hard";

export interface QuizQuestion {
  partId: string;
  choices: string[];
  correctIndex: number;
}

export interface QuizState {
  active: boolean;
  difficulty: Difficulty;
  currentQuestion: QuizQuestion | null;
  score: number;
  total: number;
  answered: boolean;
  selectedIndex: number | null;
}
