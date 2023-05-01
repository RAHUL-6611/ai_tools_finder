import axios from "axios";
axios.defaults.withCredentials = true;

export const getAllAIService = () => {
  console.log("hello getAllAIService() called");
  return axios.get(`${import.meta.env.VITE_SERVER_URL}/api/getAllAiTools`);
};

export const getParticularAI = () => {
  console.log("hello getParticularAI() called");
};
