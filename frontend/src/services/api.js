import axios from "axios";

const api = axios.create({
  baseURL: "https://semac-inscriptions.web.app"
});

export default api;