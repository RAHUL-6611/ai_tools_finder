import React from "react";
import { getAllAIService, getParticularAI } from "../services/getAIService";

const getAiHandler = () => {
  const getAllAI = async () => {
    const result = await getAllAIService();
    return result;
  };

  const getAI = async () => {
    const result = await getParticularAI();
  };

  return { getAllAI, getAI };
};

export default getAiHandler;
