import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/semac-inscriptions/us-central1/httpServer"
});

export default api;