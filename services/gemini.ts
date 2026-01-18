
import { GoogleGenAI } from "@google/genai";
import { PROJECT_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askMidtownAssistant = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Midtown Towers Islamabad Concierge. Use the following context to answer questions about the project accurately and professionally: ${PROJECT_CONTEXT}. Be polite, enthusiastic, and focus on luxury. If asked about pricing, mention it is available on inquiry.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is currently resting. Please contact our sales team at sales@midtowntowers.pk";
  }
};
