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
  sections: Array<Section>;
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
