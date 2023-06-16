import axios from "axios";
const Base_URL = "https://crm-backend-x54t.onrender.com";

// Signup
export async function userSignUp(data) {
  return await axios.post(`${Base_URL}/crm/api/v1/auth/signup`, data);
}

//SignIn
export async function userLogin(data) {
  return await axios.post(`${Base_URL}/crm/api/v1/auth/signin`, data);
}
