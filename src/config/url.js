export const API_BASE_URL = "http://localhost:3001/";

export const API_GET_TRAVEL = API_BASE_URL + "travels";

export const API_POST_USER = API_BASE_URL + "users";

export const API_POST_TRAVEL = (userId) => `${API_BASE_URL}user/${userId}/travel`;

 //export const API_GET_USERS 