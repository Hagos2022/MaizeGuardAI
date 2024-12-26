import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import type { DetectionResult as DetectionResultType } from '../types';

interface DetectionResultProps {
  result: DetectionResultType;
}

export function DetectionResult({ result }: DetectionResultProps) {
  const isHealthy = result.disease === 'Healthy';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex items-center space-x-4">
        {isHealthy ? (
          <CheckCircle className="h-8 w-8 text-green-500" />
        ) : (
          <AlertCircle className="h-8 w-8 text-yellow-500" />
        )}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {result.disease}
          </h3>
          <p className="text-gray-600">
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{result.description}</p>
    </div>
  );
}