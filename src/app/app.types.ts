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
  id: String;
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

