import React, { useState } from 'react';
import { OpenAIConfig } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: OpenAIConfig) => void;
  currentConfig: OpenAIConfig | null;
}

export function ConfigModal({ isOpen, onClose, onSave, currentConfig }: ConfigModalProps) {
  const [config, setConfig] = useState<OpenAIConfig>(
    currentConfig || {
      apiKey: '',
      model: 'gpt-3.5-turbo'
    }
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">OpenAI Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              API Key
            </label>
            <input
              type="password"
              value={config.apiKey}
              onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
              className="w-full p-2 border rounded-lg"
              placeholder="sk-..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <select
              value={config.model}
              onChange={(e) => setConfig({ ...config, model: e.target.value })}
              className="w-full p-2 border rounded-lg"
            >
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="gpt-4">GPT-4</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(config);
              onClose();
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}