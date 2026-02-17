
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIEventAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an elite event concierge for Amaan Catering Services. You help clients plan their weddings and corporate events. Your tone is professional, sophisticated, and helpful. Suggest menu options (Appetizers, Main Course, Desserts) and decor styles (Royal Pandal, Crystal Tunnel) based on user requests.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently perfecting my planning skills. Please feel free to call our human experts directly!";
  }
};
