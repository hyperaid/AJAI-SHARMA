
import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA, SERVICES, QUALIFICATIONS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Professional Assistant for Ajai Kumar Sharma. 
Ajai is a Class 1 Officer in the Ministry of Defence (Accounts) and currently the Secretary of ICSI.
His elite qualifications include: CA (Inter), CS, CMA, CFA Level 1, JRF, LLB, M.Com, and B.Com (Allahabad University).

Key details to mention:
1. He is the Secretary of ICSI and actively attends and organizes professional seminars.
2. He is a passionate teacher and guest lecturer.
3. He is a social worker, always ready to help and dedicated to social service.
4. Contact him via WhatsApp: ${PROFILE_DATA.phone} or Email: ${PROFILE_DATA.email}.

Your goal is to answer questions about his professional background, services, and qualifications.
Keep answers professional, concise, and respectful. 
If someone asks about a service he provides, mention: ${SERVICES.map(s => s.title).join(', ')}.
Identify as his AI Assistant and emphasize his unique role bridging government service, corporate leadership (ICSI), and education.
`;

export async function getAssistantResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try again later.";
  }
}
