import React from 'react';
import { diseases } from '../data/diseases';

export function DiseaseLibrary() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Maize Disease Library
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {diseases.map((disease) => (
            <div key={disease.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={disease.image}
                alt={disease.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{disease.name}</h2>
                <p className="text-gray-600 mb-4">{disease.description}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Symptoms:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {disease.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mt-4">Management:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {disease.management.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}