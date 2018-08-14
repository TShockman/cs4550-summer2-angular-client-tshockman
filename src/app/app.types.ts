export interface Course {
  id: String;
  title: String;
}

export interface Section {
  _id: String;
  courseId: String;
  maxEnrollment: Number;
  freeSeats: Number;
  title: String;
}

export interface User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  role: String;
  phone: String;
  email: String;
  address: String;
  sections: Section[];
}

export interface Module {
  id: String;
  title: String;
}

export interface Lesson {
  id: String;
  title: String;
}

export interface Widget {
  id: String;
  name: String;
  ordering: Number;
  text: String;
  type: String;
  size: Number;
  href: String;
  src: String;
  listType: String;
}

export interface Question {
  _id: String;
  title: String;
  points: Number;
  description: String;
  choices: {text: String, correct: Boolean}[];
  blanks: String[];
  isTrue: Boolean;
  questionType: String;
}

export interface Quiz {
  _id: String;
  title: String;
  questions: String[] & Question[];
}

export interface Answer {
  _id: String;
  question: String | Question;
  tfAnswer: Boolean;
  mcAnswer: String;
  essayAnswer: String;
  fitbAnswers: String[];
}

export interface Submission {
  _id: String;
  quiz: String & Quiz;
  student: String & User;
  answers: String[] & Answer[];
  submitted: Date;
}
