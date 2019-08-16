import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/semac-inscriptions/us-centtral1/httpServer"
});

export default api;