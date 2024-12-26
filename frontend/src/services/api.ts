const API_URL = "http://127.0.0.1:8000/predict";

export interface DetectionResponse {
  result: string;
  confidence: number;
  message: string;
  success: boolean;
}

export async function detectDisease(image: File): Promise<DetectionResponse> {
  const formData = new FormData();
  formData.append('file', image);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to detect disease');
  }

  return response.json();
}