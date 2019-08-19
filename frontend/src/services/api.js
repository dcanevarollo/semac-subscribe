/**
 * @author Douglas Brandão.
 * 
 * Componente de importação da API.
 */
import axios from "axios";

const api = axios.create({
  //baseURL: "https://us-central1-semac-inscriptions.cloudfunctions.net/httpServer"
  baseURL: "http://localhost:5000/semac-inscriptions/us-central1/httpServer"
});

export default api;
