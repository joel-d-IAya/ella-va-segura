import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client. 
// NOTE: The API key must be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface MarketingCopyResult {
  slogan: string;
  valueProp: string;
  hashtags: string[];
}

export const generateMarketingCopy = async (productName: string, productDesc: string): Promise<MarketingCopyResult> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Create a catchy marketing slogan, a one-sentence value proposition, and 3 hashtags for a product named "${productName}" that does the following: ${productDesc}`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            slogan: {
              type: Type.STRING,
              description: "A short, punchy, memorable slogan under 10 words."
            },
            valueProp: {
              type: Type.STRING,
              description: "A persuasive single sentence describing the benefit."
            },
            hashtags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 relevant social media hashtags."
            }
          },
          required: ["slogan", "valueProp", "hashtags"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No content generated");
    }

    return JSON.parse(text) as MarketingCopyResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};