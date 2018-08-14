export const NODE_API_URL = 'https://course-manager-shockman-node.herokuapp.com/api';
//export const NODE_API_URL = 'http://localhost:3001/api';
export const USER_API_URL = `${NODE_API_URL}/user`;
export const REGISTER_API_URL = `${NODE_API_URL}/register`;
export const LOGIN_API_URL = `${NODE_API_URL}/login`;
export const PROFILE_API_URL = `${NODE_API_URL}/profile`;
export const PASSWORD_API_URL = `${PROFILE_API_URL}/password`;
export const LOGOUT_API_URL = `${NODE_API_URL}/logout`;
export const COURSE_SECTION_API_URL = `${NODE_API_URL}/course`;
export const SECTION_API_URL = `${NODE_API_URL}/section`;
export const STUDENT_API_URL = `${NODE_API_URL}/student`;
export const QUIZ_API_URL = `${NODE_API_URL}/quiz`;

export const JAVA_API_URL = 'https://course-manager-shockman.herokuapp.com/api';
export const COURSE_API_URL = `${JAVA_API_URL}/course`;
export const LESSON_API_URL = `${JAVA_API_URL}/lesson`;

export const parseResponse = response => {
  return response.ok ? response.json() : null;
};
