import { Option } from '../models/Option';

export interface QuizQuestions {
  questionId: number;
  questionText: string;
  options: Option[];
  answer: string;
  explanation: string;
  selectedOption: string;
}
