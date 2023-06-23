import axios from "axios";

const BASE_URL = "https://crm-backend-x54t.onrender.com";

export async function fetchTicket() {
  return await axios.get(`${BASE_URL}/crm/api/v1/tickets`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
}
