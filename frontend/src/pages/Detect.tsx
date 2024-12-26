import React, { useState } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { DetectionResult } from '../components/DetectionResult';
import { detectDisease } from '../services/api';
import type { DetectionResult as DetectionResultType } from '../types';

export function Detect() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    try {
      setIsLoading(true);
      setError(null);
      const response = await detectDisease(file);
      
      if (response.success) {
        setResult({
          disease: response.result,
          confidence: response.confidence,
          description: `Detected ${response.result} with ${(response.confidence * 100).toFixed(1)}% confidence. ${response.message}`,
        });
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error('Detection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Maize Leaf Disease Detection
        </h1>
        
        <ImageUpload onImageSelect={handleImageSelect} />

        {isLoading && (
          <div className="mt-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Analyzing image...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {selectedImage && (
          <div className="mt-8">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={selectedImage}
                alt="Selected maize leaf"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        {result && <DetectionResult result={result} />}
      </div>
    </div>
  );
}