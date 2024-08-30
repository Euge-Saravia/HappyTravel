export const API_BASE_URL = "http://localhost:8080/api/";

export const API_GET_TRAVELS = API_BASE_URL + "travels";

export const API_POST_USER = API_BASE_URL + "users/register"

export const API_POST_LOG_USER = API_BASE_URL + "users/login"

export const API_PUT_TRAVELS = API_BASE_URL + "travels/edit";


export const API_GET_TRAVEL = (id) => API_BASE_URL + "travel/" + id;

export const API_POST_TRAVEL = API_BASE_URL + "travel";

export const API_GET_USER_ID = API_BASE_URL + "users/user"