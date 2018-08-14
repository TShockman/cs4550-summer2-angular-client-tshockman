export interface Course {
  id: string;
  title: string;
}

export interface Section {
  _id: string;
  courseId: string;
  maxEnrollment: number;
  freeSeats: number;
  title: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
  email: string;
  address: string;
  sections: Section[];
}

export interface Module {
  id: string;
  title: string;
}

export interface Lesson {
  id: string;
  title: string;
}

export interface Widget {
  id: string;
  name: string;
  ordering: number;
  text: string;
  type: string;
  size: number;
  href: string;
  src: string;
  listType: string;
}

export interface Question {
  _id: string;
  title: string;
  points: number;
  description: string;
  choices: {text: string, correct: boolean}[];
  blanks: string[];
  isTrue: boolean;
  questionType: string;
}

export interface Quiz {
  _id: string;
  title: string;
  questions: (string & Question)[];
}

export interface Answer {
  _id: string;
  question: string & Question;
  tfAnswer: boolean;
  mcAnswer: string;
  essayAnswer: string;
  fitbAnswers: string[];
}

export interface Submission {
  _id: string;
  quiz: string & Quiz;
  student: string & User;
  answers: (string & Answer)[];
  submitted: Date;
}
