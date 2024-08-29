export const API_BASE_URL = "http://localhost:3001/api/";

export const API_GET_TRAVELS = API_BASE_URL + "travels";

export const API_POST_USER = API_BASE_URL + "users/register"

export const API_POST_LOG_USER = API_BASE_URL + "users/login"


export const API_GET_TRAVEL = (userId, travelId) => `${API_BASE_URL}auth/${userId}/travels/${travelId}`;

export const API_POST_TRAVEL = (userId) => `${API_BASE_URL}user/${userId}/travel`;