export type Disease = 'Northern Leaf Blight' | 'Gray Leaf Spot' | 'Common Rust' | 'Healthy';

export interface DetectionResult {
  disease: Disease;
  confidence: number;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface OpenAIConfig {
  apiKey: string;
  model: string;
}

export interface MaizeInfo {
  title: string;
  content: string;
}