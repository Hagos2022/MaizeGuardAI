import { MAIZE_SYSTEM_PROMPT, formatPrompt } from '../constants/prompts';

const GEMINI_API_KEY = '12345';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export interface GeminiMessage {
  parts: { text: string }[];
}

export interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[];
    };
  }[];
}

export async function generateChatResponse(message: string): Promise<string> {
  try {
    const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: formatPrompt(message) }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Gemini');
    }

    const data: GeminiResponse = await response.json();
    return data.candidates[0]?.content.parts[0]?.text || 'No response generated';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
}